import React, { useState, useEffect } from 'react';

const AddMark = ({ articleTitle, articleUrl }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Load bookmark state from localStorage on component mount
  useEffect(() => {
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    setIsBookmarked(bookmarkedArticles.some(article => article.title === articleTitle));
  }, [articleTitle]);

  // Update localStorage when bookmark state changes
  useEffect(() => {
    const bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    const updatedArticles = bookmarkedArticles.filter(article => article.title !== articleTitle);

    if (isBookmarked) {
      updatedArticles.push({ title: articleTitle, url: articleUrl });
    }

    localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedArticles));
  }, [articleTitle, articleUrl, isBookmarked]);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button
      onClick={handleBookmarkClick}
      style={{
        backgroundColor: isBookmarked ? 'orange' : 'transparent',
        color: isBookmarked ? 'white' : 'black',
        border: 'none',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
      <i className={`fas fa-bookmark ${isBookmarked ? 'bookmarked' : ''}`} />
    </button>
  );
};

export default AddMark;
