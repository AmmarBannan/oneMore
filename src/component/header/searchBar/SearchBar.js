// src/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ filterQuery,value }) => {
  let searchTerm="";

  return (
    <div className='search-input'>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => filterQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;