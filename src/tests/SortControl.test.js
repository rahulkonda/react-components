// src/components/__tests__/SortControl.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortControl from '../components/SortControl';

test('renders SortControl component', () => {
  const mockOnSelectionChange = jest.fn();
  render(<SortControl currentSelection="releaseDate" onSelectionChange={mockOnSelectionChange} />);

  const selectElement = screen.getByLabelText('Sort by:');
  expect(selectElement).toBeInTheDocument();

  fireEvent.change(selectElement, { target: { value: 'title' } });
  expect(mockOnSelectionChange).toHaveBeenCalledWith('title');
});
