import React from 'react';
import styles from './LogoSection.module.css';
import logo from '../assets/logo.png'; 
import NicePngImage from '../assets/NicePng.png';
import SearchSection from './SearchSection';

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
      <div className={styles.textInfo}>
        <h2>Skip the travel! Find Online<br />
          <span className={styles.medical}>Medical</span>  
          <span className={styles.centers}>Centers</span>
        </h2>
        <p>Connect instantly with a 24x7 specialist or choose to<br />video visit a particular doctor.</p>
      </div>
      <button className={styles.findCenters}>Find Centers</button>
      <img src= {NicePngImage } alt="Nice PNG" className={styles.nicePngImage} />
      
      <div className={styles.container}>
        <SearchSection />
        <div className= {styles.content}>
          <h3>You may be looking for</h3>
        </div>

      </div>

      
    </div>
  );
}

export default LogoSection;
