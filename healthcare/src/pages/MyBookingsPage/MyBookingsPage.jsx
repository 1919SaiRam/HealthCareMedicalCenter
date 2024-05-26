import React from 'react';
import styles from './MyBookingsPage.module.css';
import Intro from '../../components/Intro';
import HealthMobileapp from '../../components/HealthMobileapp' ; 
import HealthFooter from '../../components/HealthFooter'; 


function MyBookingsPage() {
    return (
      <div className={styles.MyBookingsPage}>
        <Intro />
        


        {/* Placeholder for search results content */}
        <div className={styles.searchResultsContent}>
                {/* Display search results listings, filters, etc. */}
                <h2>Your Booking Results</h2>
                <p>Display Booking Done  results here...</p>
            </div>
            


        <HealthMobileapp />
        <HealthFooter />
      </div>
    );
  }
  
  export default MyBookingsPage;



