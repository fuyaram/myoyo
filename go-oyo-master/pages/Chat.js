import React from 'react';
import '../pages/Chat.css';
import Holla from '../pages/Holla';
const Chat = () => {
  return (
    <>
    <section className="video-section4">
      <video className="background-video4" autoPlay loop muted>
        <source src="https://cdn.pixabay.com/vimeo/304748300/hotel-19769.mp4?width=640&hash=581f9213476548ee5b3250fc2f84d01bccebe60b" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content26">
      <h1 id="opp">𝗢𝘃𝗲𝗿 𝟭𝟱𝟳,𝟬𝟬𝟬 𝗵𝗼𝘁𝗲𝗹𝘀 𝗮𝗻𝗱 𝗵𝗼𝗺𝗲𝘀 𝗮𝗰𝗿𝗼𝘀𝘀 𝟯𝟱 𝗰𝗼𝘂𝗻𝘁𝗿𝗶𝗲𝘀</h1>

        <p id="oopp">"Discover comfort and luxury at OYO hotels across India now!"</p>
      </div>
    </section>
    <Holla />
    <Holla />
    <Holla />
    
    
    </>
  )
}

export default Chat;
