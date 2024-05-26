import React from 'react';
import styles from './MedicalSpecialist.module.css';
import Medele  from '../assets/medicalelementor.png';  

function MedicalSpecialist() {
  return (
    <div className={styles.medical}>
      {/* <div className={styles.MedicalContent}> */}
        <img src={Medele} alt="Medical App" className={styles.Medele} />
        {/* </div> */}
    </div>
  );
}

export default MedicalSpecialist;

