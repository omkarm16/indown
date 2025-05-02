import React, { useState } from 'react';
import './Downloader.css';

function Downloader({ mode }) {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (!link.trim()) return alert('Please enter a link!');

    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          alert(`Downloaded ${mode} from:\n${link}`);
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText();
    setLink(text);
  };

  return (
    <div className="downloader">
      <h1>Instagram Downloader</h1>
      <p>Download Instagram {mode}s easily</p>

      <div className="input-box">
        <input
          type="text"
          placeholder="Insert Instagram link here"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={handlePaste}>Paste</button>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        Download
      </button>

      {loading && (
        <div className="loader">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <p>Fetching {mode}... {progress}%</p>
        </div>
      )}
    </div>
  );
}

export default Downloader;
