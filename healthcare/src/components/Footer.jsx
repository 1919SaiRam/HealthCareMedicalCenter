import React from 'react';
import './Footer.module.css';
import footerApp from '../assets/footerapp.png';
import widget1 from '../assets/widget1.png';
import widget2 from '../assets/widget2.png';
import widget3 from '../assets/widget3.png';  // Assuming the third widget image is named widget3

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerApp} alt="Footer App" className="footer-app" />
      <img src={widget1} alt="Widget 1" className="widget widget1" />
      <img src={widget2} alt="Widget 2" className="widget widget2" />
      <img src={widget3} alt="Widget 3" className="widget widget3" />
      <p className="footer-text">Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
    </div>
  );
};

export default Footer;
