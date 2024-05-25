import React from 'react';
import styles from './CardContainer.module.css';
import getoffImage from '../assets/getoff.png';
import flatoffImage from '../assets/flatoff.png';

const CardContainer = () => {
  return (
    <div className={styles.container}>
      <img
        src={getoffImage}
        alt="1st Card"
        className={`${styles.card} ${styles.card1}`}
      />
      <img
        src={flatoffImage}
        alt="2nd Card"
        className={`${styles.card} ${styles.card2}`}
      />
      <img
        src={getoffImage}
        alt="3rd Card"
        className={`${styles.card} ${styles.card3}`}
      />
    </div>
  );
};

export default CardContainer;


