import React from 'react';
import styles from './BookingInterfacePage.module.css';
import Intro from '../../components/Intro';
import FreqQuestion  from '../../components/FreqQuestion';
import HealthMobileapp from '../../components/HealthMobileapp' ; 
import HealthFooter from '../../components/HealthFooter'; 


function   BookingInterfacePage() {
    return (
      <div className={styles.BookingInterfacePage}>
         <Intro />
        


        {/* Placeholder for search results content */}
        <div className={styles.BookingInterfaceResultsContent}>
                {/* Display search results listings, filters, etc. */}
                <h2>To make schedule time slot your possiblity  Results</h2>
                <p>Display search results here...</p>
            </div>
            

        <FreqQuestion />
        <HealthMobileapp />
        <HealthFooter />
      </div>
    );
  }
  
  export default  BookingInterfacePage;


