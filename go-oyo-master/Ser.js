import React, { useState } from 'react';
import './Ser.css';

const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];
const budgets = ['100', '200', '300', '400', '500'];
const persons = ['1', '2', '3', '4', '5'];
const additionalInputOptions = ['luxury', 'rooms', 'special room', 'guest rooms', 'apartment', 'home'];

const Ser = () => {
  const [language, setLanguage] = useState('');
  const [budget, setBudget] = useState('');
  const [person, setPerson] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here using language, budget, and person variables
    console.log('Searching with language:', language, 'budget:', budget, 'person:', person, 'additionalInput:', additionalInput);
  };

  return (
    <div className="container">
      <div className="input-group">
        <div className="input">
          <label htmlFor="language"></label>
          <select id="language" onChange={(e) => setLanguage(e.target.value)}>
            <option value="">Select Language</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="budget"></label>
          <select id="budget" onChange={(e) => setBudget(e.target.value)}>
            <option value="">Select Budget</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="person"></label>
          <select id="person" onChange={(e) => setPerson(e.target.value)}>
            <option value="">Select Person</option>
            {persons.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="input">
          <label htmlFor="additionalInput"></label>
          <select id="additionalInput" onChange={(e) => setAdditionalInput(e.target.value)}>
            <option value="">Select Additional Input</option>
            {additionalInputOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Ser;
