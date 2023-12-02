import React from 'react';
import './Collaction.css'; // Create a CSS file for styling
import { Link } from 'react-router-dom';
import logo from '../images/logo (1).png'; // Path to your PNG logo
import facebookIcon from '../images/facebook.png'; // Path to your social media icons
import twitterIcon from '../images/instagram.png';
import linkdin from '../images/linkedin.png'
import x from '../images/x.png'
import threds from '../images/ux.png'
// Add more social media icons as needed
const Collaction = () => {
    return (
      <>
      <div className="containerfuck">
         <img className="logo" src={logo} alt="Logo" />
        <img className="social-icon" src={facebookIcon} alt="Facebook" />
        <img className="social-icon" src={twitterIcon} alt="Twitter" />
        <img className="social-icon" src={x} alt="Twitter" />
        <img className="social-icon" src={linkdin} alt="Twitter" />
        <img className="social-icon" src={threds} alt="Twitter" />
       
      </div>

      <div className="footer">
      <nav className="footer-nav">
      <ul className='koid'>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/support">Support</Link></li>
  <li><Link to="/blogs">Blogs</Link></li>
</ul>
      </nav>
    </div>

      </>
      
    );
  };
  
  export default Collaction;
  