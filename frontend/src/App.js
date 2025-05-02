import React, { useState } from 'react';
import './index.css';
import TopBar from './components/TopBar';
import Downloader from './components/Downloader';
import LanguageSelector from './components/LanguageSelector';
import Footer from './components/Footer';
import ShareButtons from './components/ShareButtons';

function App() {
  const [mode, setMode] = useState('video');

  const handleModeChange = (newMode) => setMode(newMode);

  return (
    <div className="app">
      <header>
        <div className="logo-container">
          <img src="/favicon.png" alt="logo" />
          <div className="logo">Instamask</div>
        </div>
        <div className="header-right">
          <LanguageSelector />
          <a href="#">FAQ</a>
        </div>
      </header>

      <TopBar onModeChange={handleModeChange} selectedMode={mode} />
      <Downloader mode={mode} />
      <ShareButtons />
      <Footer />
    </div>
  );
}

export default App;
