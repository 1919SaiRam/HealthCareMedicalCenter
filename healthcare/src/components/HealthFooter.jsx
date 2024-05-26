import React from 'react';
import styles from './HealthFooter.module.css';
import footerApp from '../assets/footerapp.png';
import widget1 from '../assets/widget1.png';
import widget2 from '../assets/widget2.png';
import widget3 from '../assets/widget3.png';  

const HealthFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <img src={footerApp} alt="Footer App" className={styles.footerApp} />
        <div className={styles.widgets}>
          <div className={styles.widgetContainer}>
            <h3 className={styles.widgetHeading}>Quick Links</h3>
            <img src={widget1} alt="Widget 1" className={styles.widget} />
          </div>
          <div className={styles.widgetContainer}>
            <h3 className={styles.widgetHeading}>Departments</h3>
            <img src={widget2} alt="Widget 2" className={styles.widget} />
          </div>
          <div className={styles.widgetContainer}>
            <h3 className={styles.widgetHeading}>Useful Links</h3>
            <img src={widget3} alt="Widget 3" className={styles.widget} />
          </div>
        </div>
      </div>
      <p className={styles.footerText}>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
    </div>
  );
};

export default HealthFooter;
