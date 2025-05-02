import React from 'react';
import './TopBar.css';
import { FaVideo, FaImage, FaCalendar, FaSync, FaCopy, FaEye } from 'react-icons/fa';

function TopBar({ onModeChange }) {
  return (
    <div className="top-bar">
      <button onClick={() => onModeChange('video')}><FaVideo /></button>
      <button onClick={() => onModeChange('image')}><FaImage /></button>
      <button onClick={() => onModeChange('reel')}><FaCalendar /></button>
      <button onClick={() => onModeChange('igtv')}><FaSync /></button>
      <button onClick={() => onModeChange('carousel')}><FaCopy /></button>
      <button onClick={() => onModeChange('story')}><FaEye /></button>
    </div>
  );
}

export default TopBar;
