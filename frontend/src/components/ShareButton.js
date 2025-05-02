// src/components/ShareButton.js
import React from 'react';

const ShareButton = ({ url }) => {
  const handleShare = (platform) => {
    let shareUrl = '';

    if (!url) {
      alert('Please paste a valid Instagram link first!');
      return;
    }

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={() => handleShare('whatsapp')} style={btnStyle}>WhatsApp</button>
      <button onClick={() => handleShare('telegram')} style={btnStyle}>Telegram</button>
      <button onClick={() => handleShare('copy')} style={btnStyle}>Copy Link</button>
    </div>
  );
};

const btnStyle = {
  padding: '8px 12px',
  background: '#0095f6',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '12px',
};

export default ShareButton;
