// src/components/InputForm.js
import React, { useState, useEffect } from 'react';
import './InputForm.css'; // CSS for styling
import ShareButton from './ShareButton';
import BookmarkButton from './BookmarkButton';

const InputForm = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [quality, setQuality] = useState('720p');

  // Auto-detect Instagram link from clipboard on page load
  useEffect(() => {
    navigator.clipboard.readText().then(text => {
      if (text.includes('instagram.com')) {
        setUrl(text);
      }
    }).catch(err => {
      console.log('Clipboard access denied');
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setProgress(0);

    // Simulate progress for demo
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // TODO: Replace this with your backend fetch call
    console.log(`Fetching: ${url} at ${quality}`);
  };

  return (
    <div className="input-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="urlInput">Paste Instagram link:</label>
        <input
          type="text"
          id="urlInput"
          placeholder="https://instagram.com/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        
        <div className="quality-selector">
          <label>Choose quality:</label>
          <select value={quality} onChange={(e) => setQuality(e.target.value)}>
            <option value="1080p">1080p</option>
            <option value="720p">720p</option>
            <option value="480p">480p</option>
            <option value="360p">360p</option>
          </select>
        </div>

        <button type="submit">Download</button>
      </form>

      {loading && (
        <div className="loader-container">
          <div className="instagram-loader">
            <div></div><div></div><div></div>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p>Fetching video... {progress}%</p>
        </div>
      )}

      <div className="extra-buttons">
        <ShareButton url={url} />
        <BookmarkButton url={url} />
      </div>
    </div>
  );
};

export default InputForm;