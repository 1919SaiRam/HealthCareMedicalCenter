import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import BookingInterfacePage from './pages/BookingInterfacePage/BookingInterfacePage';
import MyBookingsPage from './pages/MyBookingsPage/MyBookingsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="/booking" element={<BookingInterfacePage />} />
          <Route path="/my-bookings" element={<MyBookingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
