import React from 'react';
import styles from './HealthMobileapp.module.css';
import Mobile  from '../assets/mobile.png';  

function HealthMobileapp() {
  return (
    <div className={styles.mobiles}>
      <div className={styles.MobileContent}>
        <img src={Mobile} alt="Mobile App" className={styles.Mobile} />
        </div>
    </div>
  );
}

export default HealthMobileapp;

