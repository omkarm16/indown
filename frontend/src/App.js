import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async () => {
    const response = await fetch('http://localhost:5000/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });
    const data = await response.json();
    setDownloadLink(data.downloadLink);
  };

  return (
    <div className="container">
      <h1>InstaDownloader</h1>
      <input
        type="text"
        placeholder="Paste Instagram URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload}>Download</button>
      {downloadLink && <a href={downloadLink} download>Click to Download</a>}
    </div>
  );
}

export default App;
