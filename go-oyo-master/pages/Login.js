import React from 'react';
import '../pages/Login.css';
import logo3 from '../images/logo (1).png'
const Login = () => {
  return (
  <>
  
   <section className='bogbig'>
   <div className="title-text">
    
</div>
  <div className="login-wrapper">
  <div className="title login">
        <i  className="fa fa-tag"> </i>Sign up & Get ₹500 OYO Money 
    </div>
  <div className="login-title-text">
    <div className="login-title">Login Form</div>
    <div className="signup-title">Signup Form</div>
  </div>
  <div className="form-container-wrapper">
    <div className="slide-controls-wrapper">
      <input type="radio" name="slide" id="login" className="input-hidden" defaultChecked />
      <input type="radio" name="slide" id="signup" className="input-hidden" />
      <label htmlFor="login" className="slide-label login">Login</label>
      <label htmlFor="signup" className="slide-label signup">Signup</label>
      <div className="slider-tab-wrapper"></div>
    </div>
    <div className="form-inner-wrapper">
      <form action="#" className="login-form">
        <div className="input-field">
          <input type="text" placeholder="Email Address" required />
        </div>
        <div className="input-field">
          <input type="password" placeholder="Password" required />
        </div>
        <div className="pass-link">
          <a href=".">Forgot password?</a>
        </div>
        <div className="input-field btn-wrapper">
          <div className="btn-layer-wrapper"></div>
          <input type="submit" className="btn-input" value="Login" />
        </div>
        <div className="signup-link link">
          Not a member? <a href=".">Signup now</a>
        </div>
      </form>
      
    </div>
  </div>
</div>
<div className='police'>
<img src={logo3} alt='gh' className='loglogo'></img>
    <h2 id='lola'>Hotels and homes across 800 cities, 24+ countries</h2>
    <h1 id='yoyo'>There’s a smarter way to OYO around</h1>
    <p id='lolo'>Sign up with your phone number and <br/>get exclusive access to discounts and savings on OYO stays and with our many travel partners.
</p>
</div>
   </section>
 


  </>
  )
}

export default Login;
