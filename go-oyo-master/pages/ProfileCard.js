import React from 'react';
import '../pages/ProfileCard.css'; // Import your CSS file for styling

const ProfileCard = ({ title, content, image }) => {
  return (
    <div className="profile-card">
      <div className="profile-card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <div className="profile-card-image">
        <img src={image} alt="Profile" />
      </div>
    </div>
  );
};

export default ProfileCard;
