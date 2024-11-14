import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearch} 
        placeholder="Type a name to search..."
      />
    </div>
  );
}

export default Search;
