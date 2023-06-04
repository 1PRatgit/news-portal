import React, { useState, useEffect } from 'react';

const BookMarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedArticles')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const handleRemoveBookmark = (title) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.title !== title);
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks.map((bookmark) => (
            <li key={bookmark.title}>
              <a href={bookmark.url}>{bookmark.title}</a>
              <button onClick={() => handleRemoveBookmark(bookmark.title)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookmarks found.</p>
      )}
    </div>
  );
};

export default BookMarks;
