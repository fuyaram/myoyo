import React from 'react';
import { IconContext } from 'react-icons';
import { FaReact } from 'react-icons/fa'; // Import the React Awesome Icon you want to use
import './BorderBox.css'; // Import your CSS file

const BorderBox = ({ icon, name, title }) => {
  const IconComponent = icon ? icon : <FaReact />; // Default to React Awesome Icon if no icon is provided

  return (
    <div className="border-box">
      <div className="box-icon">
        <IconContext.Provider value={{ size: '2em' }}>{IconComponent}</IconContext.Provider>
      </div>
      <div className="box-name">{name}</div>
      <div className="box-title">{title}</div>
    </div>
  );
};

export default BorderBox;
