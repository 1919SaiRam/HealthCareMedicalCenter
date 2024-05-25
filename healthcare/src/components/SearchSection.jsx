import React, { useState, useEffect } from 'react';
import { fetchStates, fetchCities } from '../api/api'; // Importing axios functions from api folder
import styles from './SearchSection.module.css';

function SearchSection() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch the list of all states from the backend
    fetchStates()
      .then(data => {
        setStates(data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  const handleStateChange = async (e) => {
    const selectedState = e.target.value;
    setSelectedState(selectedState);
    // Fetch the list of cities for the selected state from the backend
    try {
      const data = await fetchCities(selectedState);
      setCities(data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    setSelectedCity(selectedCity);
  };

  const handleSearch = () => {
    // Perform search based on selected state and city
    // You can handle the search logic here, such as redirecting to a new page or fetching medical center data
    console.log('Search clicked!');
    console.log('Selected state:', selectedState);
    console.log('Selected city:', selectedCity);
  };

  return (
    <div className={styles.searchSection}>
      <div className={styles.dropdownContainerstate}>
        <div className={styles.rectangle}>
          <select value={selectedState} onChange={handleStateChange} className={styles.select}>
            <option value="" hidden>Select State</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.dropdownContainercity}>
        <div className={styles.rectangle}>
          <select value={selectedCity} onChange={handleCityChange} className={styles.select}>
            <option value="" hidden>Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      </div>
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchSection;
