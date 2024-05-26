import React from 'react';
import styles from './SearchResultsPage.module.css';
import Intro from '../../components/Intro';
import HealthMobileapp from '../../components/HealthMobileapp' ; 
import HealthFooter from '../../components/HealthFooter'; 


function SearchResultsPage() {
    return (
      <div className={styles.SearchResultsPage}>
        <Intro />
        


        {/* Placeholder for search results content */}
        <div className={styles.searchResultsContent}>
                {/* Display search results listings, filters, etc. */}
                <h2>Search Results</h2>
                <p>Display search results here...</p>
            </div>
            


        <HealthMobileapp />
        <HealthFooter />
      </div>
    );
  }
  
  export default SearchResultsPage;




