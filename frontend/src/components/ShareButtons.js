import React from 'react';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';
import './ShareButtons.css';

function ShareButtons() {
  const url = window.location.href;
  const text = "Check out this Instagram downloader!";

  return (
    <div className="share-buttons">
      <p>Share this tool:</p>
      <a href={`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`} target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
    </div>
  );
}

export default ShareButtons;
