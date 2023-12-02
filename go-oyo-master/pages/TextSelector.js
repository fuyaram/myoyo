import React, { useState } from 'react';
import './TextSelector.css'; // Add your CSS styles here

const texts = ['solo rooms', 'guest room', 'luxury', 'buy for rent']; // Array of texts

const TextSelector = () => {
  const [selectedText, setSelectedText] = useState('');

  const handleTextChange = (event) => {
    setSelectedText(event.target.value);
  };

  return (
    <div className="text-selector-container678">
      <select className="text-select" onChange={handleTextChange} value={selectedText}>
        <option value="">Select a text</option>
        {texts.map((text, index) => (
          <option key={index} value={text}>
            {text}
          </option>
        ))}
      </select>
      <div className="selected-text90">{selectedText}</div>
    </div>
  );
};

export default TextSelector;
