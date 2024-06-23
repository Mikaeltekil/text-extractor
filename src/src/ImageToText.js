import React, { useState } from 'react';
import TextDisplay from './TextDisplay'; // Import TextDisplay component
import './ImageToText.css';

const ImageToText = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState(''); // State to hold translated text

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleTranslate = () => {
    setIsLoading(true);

    // Simulate translation process
    setTimeout(() => {
      setIsLoading(false);
      // Replace with actual translation logic
      setTranslatedText('This is the translated text.'); // Example translated text
    }, 2000);
  };

  return (
    <div className="image-to-text-container">
      <div className="input-group">
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose File
        </label>
        <input id="file-upload" type="file" onChange={handleImageChange} />
        <button className="upload-button" onClick={handleTranslate}>
          Translate
        </button>
      </div>
      <div className="image-preview">
        {selectedImage && <img src={selectedImage} alt="Selected" />}
        {isLoading && <div className="loading-overlay">Loading...</div>}
      </div>
      <TextDisplay translatedText={translatedText} /> {/* Pass translatedText as prop */}
    </div>
  );
};

export default ImageToText;
