import React from 'react';
import './ImagePreview.css'; // Import the CSS file for styling

const ImagePreview = ({ selectedImage }) => {
  return (
    <div className="image-preview-container">
      {selectedImage ? (
        <img src={selectedImage} alt="Selected" className="image-preview" />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default ImagePreview;
