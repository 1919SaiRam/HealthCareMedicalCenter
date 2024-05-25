import React from 'react';
import styles from './LandingPage.module.css';
import Intro from '../../components/Intro';
import LogoSection from '../../components/LogoSection';
import SpecialisationSection from '../../components/SpecialisationSection';
import CardContainer from '../../components/CardContainer';
// import Footer from '../../components/Footer'; 



function LandingPage() {
  return (
    <div className={styles.LandingPage}>
      <Intro />
      <LogoSection />
      <SpecialisationSection /> 
      <CardContainer />


      {/* <Footer /> */}
    </div>
  );
}

export default LandingPage;
