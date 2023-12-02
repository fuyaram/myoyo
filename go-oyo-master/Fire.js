import React from 'react';
import './Fire.css';
import fire from './images/fire-removebg-preview.png'
const Fire = () => {
  return (
    <div className="container89">
      <div className="image-containerop">
        <img className="jkl" src={fire} alt="Icon" />
        <div className="text-containerpo">
          <h2>Get access to exclusive deals</h2>
          <p>
Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="email-input-container">
        <input
          className="email-input"
          type="email"
          placeholder="Your email"
        />
        <button className="notify-button">Notify</button>
      </div>
    </div>
  );
};

export default Fire;
