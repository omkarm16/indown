import React, { useState } from 'react';
import './Downloader.css';

function Downloader({ mode }) {
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = () => {
    if (!link) return alert("Please enter a link!");

    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setLoading(false);
          console.log(`Downloaded ${mode} from link: ${link}`);
          return 100;
        }
        return old + 10;
      });
    }, 300);
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
        <button onClick={() => navigator.clipboard.readText().then(setLink)}>Paste</button>
      </div>

      <button className="download-btn" onClick={handleDownload}>Download</button>

      {loading && (
        <div className="loader">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <p>Fetching content... {progress}%</p>
        </div>
      )}
    </div>
  );
}

export default Downloader;
