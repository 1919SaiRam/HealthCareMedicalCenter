import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import styles from './Intro2.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { fetchStates, fetchCities } from '../api/api';
import sensodyneImage from '../assets/sensodyne.png'; 

function Intro2() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [medicalCentersCount, setMedicalCentersCount] = useState(0);

  useEffect(() => {
    const loadStates = async () => {
      const statesData = await fetchStates();
      if (statesData) {
        const formattedStates = statesData.map(state => ({ value: state, label: state }));
        setStates(formattedStates);
      }
    };
    loadStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const loadCities = async () => {
        const citiesData = await fetchCities(selectedState.value);
        if (citiesData) {
          const formattedCities = citiesData.map(city => ({ value: city, label: city }));
          setCities(formattedCities);
        }
      };
      loadCities();
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null); // Reset city when state changes
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };

  const handleSearch = async () => {
    if (selectedState && selectedCity) {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState.value}&city=${selectedCity.value}`
      );
      const data = await response.json();
      setMedicalCenters(data);
      setMedicalCentersCount(data.length);
    }
  };

  const handleMyBookingsClick = () => {
    navigate('/my-bookings');
  };

  return (
    <div className={styles.logoSectionWrapper}>
      <div className={styles.intro}>
        <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      </div>

      <div className={styles.logoSection}>
        <img src={logo} alt="Medify Logo" className={styles.logo} />
        <nav className={styles.navigation}>
          <ul>
            <li>Find Doctors</li>
            <li>Hospitals</li>
            <li>Medicines</li>
            <li>Surgeries</li>
            <li>Software for Provider</li>
            <li>Facilities</li>
          </ul>
        </nav>
        <button className={styles.myBookings} onClick={handleMyBookingsClick}>My Bookings</button>
      </div>

      <img src={sensodyneImage} alt="Sensodyne Logo" className={styles.sensodyneImage} />

      <div className={styles.backbox}></div>

      <div className={styles.searchBox}>
        <Select
          className={styles.smallrect1}
          options={states}
          value={selectedState}
          onChange={handleStateChange}
          placeholder="Select State"
        />
        <Select
          className={styles.smallrect2}
          options={cities}
          value={selectedCity}
          onChange={handleCityChange}
          placeholder="Select City"
          isDisabled={!selectedState}
        />
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>

      <div className={styles.medicalCentersInfo}>
        {medicalCentersCount > 0 && selectedState && (
          <div className={styles.medicalCentersCountContainer}>
            <h3>{medicalCentersCount} medical centers available in {selectedState.label}</h3>
            <p>Book appointments with minimum wait-time & verified doctor details</p>
          </div>
        )}
      </div>

      <div className={styles.resultsContainer}>
        {medicalCenters.length > 0 ? (
          medicalCenters.map((center, index) => (
            <div key={index} className={styles.medicalCenter}>
              <h3>{center.name}</h3>
              <p>{center.address}</p>
              <p>{center.contact}</p>
            </div>
          ))
        ) : (
          selectedState && selectedCity && <p>No medical centers found.</p>
        )}
      </div>
    </div>
  );
}

export default Intro2;
