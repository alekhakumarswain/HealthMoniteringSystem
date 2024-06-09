import React from 'react';

function UploadForm() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Code to upload file to backend API
  };

  return (
    <div>
      <h2>Upload Health Data</h2>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
}

export default UploadForm;
