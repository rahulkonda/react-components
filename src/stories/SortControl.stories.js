// src/stories/SortControl.stories.js
import React, { useState } from 'react';
import SortControl from '../components/SortControl';

export default {
  title: 'SortControl',
  component: SortControl,
};

export const Default = () => {
  const [currentSelection, setCurrentSelection] = useState('releaseDate');

  const handleSelectionChange = (value) => {
    setCurrentSelection(value);
    console.log('Selected option:', value);
  };

  return <SortControl currentSelection={currentSelection} onSelectionChange={handleSelectionChange} />;
};
