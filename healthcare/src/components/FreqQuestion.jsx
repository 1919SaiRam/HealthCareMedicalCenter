import React from 'react';
import styles from './FreqQuestion.module.css';
import Question   from '../assets/question.png';  

function FreqQuestion() {
  return (
    <div className={styles.question}>
      {/* <div className={styles.MobileContent}> */}
        <img src={Question} alt="Mobile App" className={styles.question} />
        {/* </div> */}
    </div>
  );
}

export default  FreqQuestion;

