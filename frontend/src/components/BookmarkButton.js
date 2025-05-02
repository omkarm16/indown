// src/components/BookmarkButton.js
import React, { useState, useEffect } from 'react';

const BookmarkButton = ({ url }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('bookmarkedLinks') || '[]');
    setBookmarked(saved.includes(url));
  }, [url]);

  const handleBookmark = () => {
    let saved = JSON.parse(localStorage.getItem('bookmarkedLinks') || '[]');

    if (!url) {
      alert('Please paste a valid Instagram link first!');
      return;
    }

    if (saved.includes(url)) {
      saved = saved.filter(link => link !== url);
      alert('Removed from bookmarks');
    } else {
      saved.push(url);
      alert('Added to bookmarks');
    }

    localStorage.setItem('bookmarkedLinks', JSON.stringify(saved));
    setBookmarked(saved.includes(url));
  };

  return (
    <button onClick={handleBookmark} style={btnStyle}>
      {bookmarked ? '★ Bookmarked' : '☆ Bookmark'}
    </button>
  );
};

const btnStyle = {
  padding: '8px 12px',
  background: '#262626',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '12px',
};

export default BookmarkButton;
