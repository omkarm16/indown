import React, { useState } from 'react';
import '../index.css'; // make sure your styles apply

function Downloader({ mode }) {
  const [inputUrl, setInputUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadLinks, setDownloadLinks] = useState([]);
  const [error, setError] = useState('');

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputUrl(text);
    } catch (err) {
      alert('Unable to paste from clipboard');
    }
  };

  const handleDownload = async () => {
    if (!inputUrl.trim()) {
      alert('Please enter a valid Instagram URL');
      return;
    }

    setLoading(true);
    setError('');
    setDownloadLinks([]);

    try {
      const response = await fetch('http://localhost:5000/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputUrl }),
      });

      const data = await response.json();

      if (response.ok && data.data && data.data.length > 0) {
        setDownloadLinks(data.data);
      } else {
        setError(data.error || 'No downloadable content found');
      }
    } catch (err) {
      setError('Failed to connect to backend');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="downloader">
      <h1>Download Instagram {mode}</h1>
      <p>Paste Instagram {mode} link below to download</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Paste Instagram link here"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
        />
        <button onClick={handlePaste}>Paste</button>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        {loading ? 'Processing...' : 'Get Download Link'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {downloadLinks.map((link, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            Download File {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Downloader;