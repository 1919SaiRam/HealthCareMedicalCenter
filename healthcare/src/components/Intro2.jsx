// import React from 'react';
// import styles from './Intro2.module.css';
// import { useNavigate } from 'react-router-dom'; 
// import logo from '../assets/logo.png'; 




// function Intro2() {
//     const navigate = useNavigate();
    
//     const handleMyBookingsClick = () => {
//         navigate('/my-bookings'); // Navigate to '/my-bookings' route
//       };
    



//   return (
//     <div   className={styles.logoSectionWrapper} >
//     <div className={styles.intro}>
//       <p>The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
//     </div>

//       <div className={styles.logoSection}>
//        <img src={logo} alt="Medify Logo" className={styles.logo} />
//        <nav className={styles.navigation}>
//             <ul>
//                 <li>Find Doctors</li>
//                 <li>Hospitals</li>
//                 <li>Medicines</li>
//                 <li>Surgeries</li>
//                 <li>Software for Provider</li>
//                 <li>Facilities</li>
//             </ul>
//         </nav>
//             <button className={styles.myBookings}  onClick={handleMyBookingsClick} >My Bookings</button>
//        </div>

//     <div className={styles.backbox}></div>

//     <div className={styles.searchBox}>
//         <input className={styles.smallrect1} type="text" placeholder="⟟ State" />
//         <input className={styles.smallrect2} type="text" placeholder="⟟ Location" />
//         <button className={styles.searchButton}>Search</button>
//       </div>

//   </div>
//   );
// }

// export default Intro2;





import React, { useState, useEffect } from 'react';
import styles from './Intro2.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { fetchStates, fetchCities } from '../api/api';

function Intro2() {
  const navigate = useNavigate();
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [medicalCenters, setMedicalCenters] = useState([]);

  useEffect(() => {
    const loadStates = async () => {
      const statesData = await fetchStates();
      if (statesData) {
        setStates(statesData);
      }
    };
    loadStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      const loadCities = async () => {
        const citiesData = await fetchCities(selectedState);
        if (citiesData) {
          setCities(citiesData);
        }
      };
      loadCities();
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity(''); // Reset city when state changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSearch = async () => {
    if (selectedState && selectedCity) {
      const response = await fetch(
        `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
      );
      const data = await response.json();
      setMedicalCenters(data);
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

      <div className={styles.backbox}></div>

      <div className={styles.searchBox}>
        <select className={styles.smallrect1} value={selectedState} onChange={handleStateChange}>
          <option value="" disabled>Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
        <select className={styles.smallrect2} value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
          <option value="" disabled>Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>

      <div className={styles.results}>
        {medicalCenters.length > 0 ? (
          <ul>
            {medicalCenters.map((center, index) => (
              <li key={index}>{center.name}</li>
            ))}
          </ul>
        ) : (
          selectedState && selectedCity && <p>No medical centers found.</p>
        )}
      </div>
    </div>
  );
}

export default Intro2;
