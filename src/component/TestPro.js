import React, { useRef, useState } from 'react';

function TestPro() {
  const fileInputRef = useRef(null);
  const [pdfUploaded, setPdfUploaded] = useState(false);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfUploaded(true);
    } else {
      alert('Please select a PDF file.');
    }
  };

  const handleRemoveFile = () => {
    setPdfUploaded(false);
    // Optionally, you can also clear the input field value if needed
    fileInputRef.current.value = '';
  };

  return (
    <div className="App">
      <h1>Upload PDF File</h1>
      <button onClick={handleUploadClick}>Upload PDF</button>
      <input 
        type="file" 
        accept="application/pdf" 
        style={{ display: 'none' }} 
        ref={fileInputRef} 
        onChange={handleFileInputChange} 
      />
      {pdfUploaded && (
        <div>
          <p>PDF uploaded successfully!</p>
          <button onClick={handleRemoveFile}>Remove PDF</button>
        </div>
      )}
    </div>
  );
}

export default TestPro;
