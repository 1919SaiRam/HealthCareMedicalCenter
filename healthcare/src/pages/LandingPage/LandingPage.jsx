import React from 'react';
import styles from './LandingPage.module.css';
import Intro from '../../components/Intro';
import LogoSection from '../../components/LogoSection';

function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Intro />
      <LogoSection />
    </div>
  );
}

export default LandingPage;
