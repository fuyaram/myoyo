import React from 'react';
import './Footer.css';
import logo from '../images/logo (1).png'
import Collaction from './Collaction';
const Footer = () => {
  return (
 <>
 <Collaction />
 <footer>
      <div className="main-content">
        <div className="left5 box">
          <h2 d="ps">About us</h2>
          <div className="contentyu">
            <p className='l'>OYO, India's leading hotel chain, revolutionizes hospitality with innovative technology solutions. Offering affordable luxury, OYO hotels redefine travel experiences, ensuring comfort and quality. </p>
            <div className="social">
              <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f"></span></a>
              <a href="."><span class="fab fa-twitter"></span></a>
              <a href="https://instagram.com/coding.np"><span className="fab fa-instagram"></span></a>
              <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div className="center6 box">
          <h2>Address</h2>
          <div className="contentyu">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">Gurugram, Haryana, India.</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+089-765432100</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">oyo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right7 box">
          <h2>Contact us</h2>
          <div className="contentyu">
            <form action="#">
              <div className="email">
                <img className='uiop' src={logo} alt='io'></img>
              </div>
              <div className="btn">
                <button type="submit">join oyo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="https://fuyaram-dev.netlify.app/">fuyaram dewasi</a> | </span>
          <span className="far fa-copyright"></span><span> 2023 All rights reserved.</span>
        </center>
      </div>
    </footer>

 </>
  );
};

export default Footer;
