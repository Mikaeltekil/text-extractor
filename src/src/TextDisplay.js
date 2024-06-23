import React from 'react';
import './TextDisplay.css';

const TextDisplay = ({ translatedText }) => {
  return (
    <div className="text-display-container">
      <h2 className="text-heading">Translated Text</h2>
      <div className="text-content">
        {translatedText ? (
          <p>{translatedText}</p>
        ) : (
          <p className="placeholder-text">No text translated yet</p>
        )}
      </div>
    </div>
  );
};

export default TextDisplay;
