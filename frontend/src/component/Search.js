// SearchForm.js

import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <form className='form-inline' onSubmit={handleSubmit}>
      <div class="input-group">
      <input 
        type="text" className='form-control mb-2 mr-sm-2'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter your search query"
      />
        <div class="input-group-append">
        <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
};

export default Search;