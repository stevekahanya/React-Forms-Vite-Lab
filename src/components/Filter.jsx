import React from "react";

function Filter({ search, onSearchChange, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        // The test expects the prop name to be 'search'
        value={search} 
        onChange={(e) => onSearchChange(e.target.value)} 
      />
      <select 
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter; // Fix: Ensure this is exported!