import React from 'react';
import '../pages/About.css';
import logoj from '../images/logo (1).png'
import Slidesince from './Slidesince';
import ProfileGrid from '../pages/ProfileGrid'

const About = () => {
  return (
   <>
   
  
   <div>
    <section className='golg'>
    <img src={logoj} alt="jkk" className='hs' />
    <h1 id='uyop'>Our <br />
Mission</h1>
    <p id='uyopp'>
    OYO is a global platform that empowers <br /> entrepreneurs and small businesses <br /> with hotels and homes by providing<br /> full stack technology that<br /> increases earnings and eases operations. <br />Bringing affordable and trusted accommodation<br /> that guests can book instantly.
    </p>
    </section>
   </div>
   <section className="video-sectionabout">
      <video className="background-videoabout" autoPlay loop muted>
        <source src="https://player.vimeo.com/external/404901359.sd.mp4?s=c6e2ed4c8fa7ab80bda223d3ad3dd06297313219&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="contentabout">
      <h1 id="oppui">We strive to make the lives <br />of our patrons easier by<br /> multiplying revenue channels <br />and using our technological expertise<br /> to maximize demand.</h1>
      </div>
    </section>
   <section className='diwali'>
   <h1 id='nu'>157K+ storefronts are using<br />
our tech globally</h1>

<div className='fuv'>
<img src='https://assets.oyoroomscdn.com/img_oyoinfra_dweb.png' alt='jk' className='godo'></img>
</div>
<p id='sundal'>
 <strong>✔</strong>For maximising revenue
<br />
<strong>✔</strong>To build online presence across channels
<br />
<strong>✔</strong>To reach more guests & optimise experience
<br />
<strong>✔</strong> For hassle-free operations
<br />
<strong>✔</strong> To build a brand loved by both travellers & city dwellers
</p>
   </section>
   <Slidesince />
   <ProfileGrid />
   
   </>
  )
}

export default About;
