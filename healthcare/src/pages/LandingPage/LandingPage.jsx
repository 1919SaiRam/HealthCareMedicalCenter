import React from 'react';
import styles from './LandingPage.module.css';
import Intro from '../../components/Intro';
import LogoSection from '../../components/LogoSection';
import SpecialisationSection from '../../components/SpecialisationSection';
import CardContainer from '../../components/CardContainer';



function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Intro />
      <LogoSection />
      <SpecialisationSection /> 
      <CardContainer />
    </div>
  );
}

export default LandingPage;
