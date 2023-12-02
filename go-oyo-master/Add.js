import React from 'react';
import { FaUserPlus, FaUserTie, FaBuilding, FaPhone, FaTag} from 'react-icons/fa'; // Import React Awesome Icons
import BorderBox from './BorderBox'; // Import the BorderBox component
import './Add.css'; // Import your main CSS file


const Add = () => {
  const boxesData = [
    
    
    { icon: <FaUserPlus />, name: 'Become a Member', title: 'Additional 10% off on stays' },
    { icon: <FaUserTie />, name: 'OYO for Business', title: 'Trusted by 5000 Corporates' },
    { icon: <FaBuilding />, name: 'List your property', title: 'Company Business' },
    { icon: <FaPhone />, name: '0124-6201611', title: 'Real Estate Property' },
    { icon: <FaTag />, name: 'oyo offers', title: 'first buy get first 100% offer' },
   
  ];

  return (
    <div className="app-container">
      {boxesData.map((data, index) => (
        <BorderBox key={index} {...data} />
      ))}
    </div>
  );
};

export default Add;
