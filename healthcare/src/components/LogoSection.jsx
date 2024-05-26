import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import styles from './LogoSection.module.css';
import logo from '../assets/logo.png'; 
import NicePngImage from '../assets/NicePng.png';
import SearchSection from './SearchSection';

// Define an array of image paths and corresponding alt texts
const images = [
  { path: require('../assets/doctors.png'), alt: 'Doctors' },
  { path: require('../assets/labs.png'), alt: 'Labs' },
  { path: require('../assets/hospitals.png'), alt: 'Hospitals' },
  { path: require('../assets/medical.png'), alt: 'Medical' },
  { path: require('../assets/ambulance.png'), alt: 'Ambulance' }
];

function LogoSection() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleFindCentersClick = () => {
    navigate('/search-results'); // Navigate to '/search-results' route
  };

  const handleMyBookingsClick = () => {
    navigate('/my-bookings'); // Navigate to '/my-bookings' route
  };


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
        <button className={styles.myBookings}  onClick={handleMyBookingsClick} >My Bookings</button>
      </div>
      <div className={styles.textInfo}>
        <h2>Skip the travel! Find Online<br />
          <span className={styles.medical}>Medical</span>  
          <span className={styles.centers}>Centers</span>
        </h2>
        <p>Connect instantly with a 24x7 specialist or choose to<br />video visit a particular doctor.</p>
      </div>
      <button className={styles.findCenters} onClick={handleFindCentersClick}>Find Centers</button>
      <img src={NicePngImage} alt="Nice illustration" className={styles.nicePngImage} />
      
      <div className={styles.container}>
        <SearchSection />
        <div className={styles.content}>
          <h3>You may be looking for</h3>
          <div className={styles.imageContainer}>
            {/* Map over the array of image paths and render each image */}
            {images.map((image, index) => (
              <img key={index} src={image.path} alt={image.alt} className={styles.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
