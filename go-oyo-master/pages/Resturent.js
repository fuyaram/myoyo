import React from 'react';
import '../pages/Resturent.css';
import Holla from '../pages/Holla';
const Resturent = () => {
  return (
    <>
    <section className="video-section2">
      <video className="background-video2" autoPlay loop muted>
        <source src="https://cdn.pixabay.com/vimeo/761273571/hotel-135164.mp4?width=1280&hash=461bba8864c54fae85f768e4e3f102bbf486f9ca" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content24">
      <h1 id="opp">𝗢𝘃𝗲𝗿 𝟭𝟱𝟳,𝟬𝟬𝟬 𝗵𝗼𝘁𝗲𝗹𝘀 𝗮𝗻𝗱 𝗵𝗼𝗺𝗲𝘀 𝗮𝗰𝗿𝗼𝘀𝘀 𝟯𝟱 𝗰𝗼𝘂𝗻𝘁𝗿𝗶𝗲𝘀</h1>

        <p id="oopp">"Discover comfort and luxury at OYO hotels across India now!"</p>
      </div>
    </section>
    <Holla />
    <Holla />
    
    </>
  )
}

export default Resturent;
