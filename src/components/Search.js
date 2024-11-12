import React, { useState } from "react";

function Search({ plants, setPlants }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchTerm(searchQuery);

    const filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPlants(filteredPlants);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
