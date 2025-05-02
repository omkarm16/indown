import React from 'react';
import './LanguageSelector.css';

function LanguageSelector() {
  return (
    <select className="language-selector">
      <option>EN</option>
      <option>ES</option>
      <option>FR</option>
      <option>DE</option>
      <option>IT</option>
    </select>
  );
}

export default LanguageSelector;