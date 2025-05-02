import React from 'react';
import { FaDownload, FaInstagram, FaRegSmile } from 'react-icons/fa';
import '../App.css'; // keeping styles in App.css

const StoryDownloader = () => {
  return (
    <div className="story-downloader">
      <h2 className="section-title"><FaInstagram color="#E1306C" /> Instagram Story Downloader</h2>
      <div className="input-group">
        <input className="input-field" type="text" placeholder="Enter Instagram username" />
        <button className="btn-primary">
          <FaDownload /> Download
        </button>
      </div>
      <div className="story-gallery">
        {/* Placeholder thumbnails */}
        <img className="story-thumbnail" src="https://via.placeholder.com/100" alt="story 1" />
        <img className="story-thumbnail" src="https://via.placeholder.com/100" alt="story 2" />
        <img className="story-thumbnail" src="https://via.placeholder.com/100" alt="story 3" />
      </div>
      <div className="analytics-footer">
        <FaRegSmile /> No login required. 100% free.
      </div>
    </div>
  );
};

export default StoryDownloader;
