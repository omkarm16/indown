import React from 'react';
import './TopBar.css';
import { FaVideo, FaImage, FaCalendarAlt, FaSyncAlt, FaCopy, FaEye } from 'react-icons/fa';

function TopBar({ onModeChange, selectedMode }) {
  const icons = [
    { mode: 'video', icon: <FaVideo /> },
    { mode: 'image', icon: <FaImage /> },
    { mode: 'reel', icon: <FaCalendarAlt /> },
    { mode: 'igtv', icon: <FaSyncAlt /> },
    { mode: 'carousel', icon: <FaCopy /> },
    { mode: 'story', icon: <FaEye /> },
  ];

  return (
    <div className="top-bar">
      {icons.map((item) => (
        <button
          key={item.mode}
          className={selectedMode === item.mode ? 'active' : ''}
          onClick={() => onModeChange(item.mode)}
          title={item.mode}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}

export default TopBar;