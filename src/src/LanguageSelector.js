import React from 'react';
import './LanguageSelector.css'; // Import the CSS file for styling

const LanguageSelector = ({ language, handleLanguageChange }) => {
  return (
    <div className="language-selector-container">
      <select onChange={handleLanguageChange} value={language} className="language-selector">
        <option value="eng">English</option>
        <option value="spa">Spanish</option>
        <option value="fra">French</option>
        <option value="deu">German</option>
        <option value="ita">Italian</option>
        <option value="por">Portuguese</option>
        <option value="rus">Russian</option>
        <option value="jpn">Japanese</option>
        <option value="chi_sim">Chinese (Simplified)</option>
        <option value="chi_tra">Chinese (Traditional)</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
