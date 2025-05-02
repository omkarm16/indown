import React, { useState } from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Downloader from './components/Downloader';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [mode, setMode] = useState('video');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    console.log(`Switched to ${newMode} mode`);
  };

  return (
    <div className="app">
      <header>
        <div className="logo">InstaDL</div>
        <div className="header-right">
          <LanguageSelector />
          <a href="#">FAQ</a>
        </div>
      </header>

      <TopBar onModeChange={handleModeChange} />

      <Downloader mode={mode} />
    </div>
  );
}

export default App;