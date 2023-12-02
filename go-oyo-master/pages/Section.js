import React, { useState } from 'react';
import '../pages/Section.css'; // Import the CSS file

const Section = () => {
    const [addValue, setAddValue] = useState(0);

    const increaseAddValue = () => {
      setAddValue(addValue + 100);
    };
 

  return (
    <div className="container9000">
      <div className="button-container">
        <button className="add-button" onClick={increaseAddValue}>
          Match Your Budget
        </button>
        <span className="add-value">Add Money: {addValue}</span>
        <button className="show-button" onClick={() => alert(`Increased Value: ${addValue}`)}>
          Show Hotels
        </button>
      </div>
     
    </div>
  );
};

export default Section;
