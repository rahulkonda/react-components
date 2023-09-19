import React from 'react';

const SortControl = ({ currentSelection, onSelectionChange }) => {
  const handleSelectionChange = (event) => {
    const selectedValue = event.target.value;
    onSelectionChange(selectedValue);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sortBy">Sort by:</label>
      <select id="sortBy" value={currentSelection} onChange={handleSelectionChange}>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
