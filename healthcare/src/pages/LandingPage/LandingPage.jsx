import React from 'react';
import styles from './LandingPage.module.css';
import Intro from '../../components/Intro';
import LogoSection from '../../components/LogoSection';
import SpecialisationSection from '../../components/SpecialisationSection';
import CardContainer from '../../components/CardContainer';
import MedicalSpecialist from '../../components/MedicalSpecialist';
import FreqQuestion  from '../../components/FreqQuestion';
import HealthMobileapp from '../../components/HealthMobileapp' ;
import HealthFooter from '../../components/HealthFooter'; 

function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Intro />
      <LogoSection />
      <SpecialisationSection /> 
      <CardContainer />
      <MedicalSpecialist />
      <FreqQuestion />
      <HealthMobileapp />
      <HealthFooter />
    </div>
  );
}

export default LandingPage;
