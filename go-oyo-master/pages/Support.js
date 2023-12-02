import React from 'react';
import '../pages/Support.css';

const Support = () => {
  return (
   <>
   <div class="border-boxuio">
  <div class="centered-content">
    <img src="https://logodownload.org/wp-content/uploads/2020/02/oyo-logo-4.png" alt="Logo" class="logo"></img>
    <h1>OYO’s Help Assistant</h1>
    <p>
We’re here for your queries</p>
  </div>
  <div class="centered-content">
    <h4>Booking ID</h4>
    <input type="text" placeholder="Enter your text here" class="input-box"></input>
    <button class="process-button">Process</button>
  </div>
  <div class="bottom-content">
    <p>To make a new booking, contact <a href='0124-4208080'>0124-4208080</a>.</p>
  </div>
</div>

   </>
  )
}

export default Support;
