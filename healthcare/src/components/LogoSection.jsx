import React from 'react';
import styles from './LogoSection.module.css';
import logo from '../assets/logo.png'; 

function LogoSection() {
  return (
    <div className={styles.logoSectionWrapper}>
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
        <button className={styles.myBookings}>My Bookings</button>
      </div>
    </div>
  );
}

export default LogoSection;
