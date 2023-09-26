// src/components/__tests__/MovieTile.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieTile from '../components/MovieTile';

const movieInfo = {
  title: 'Black Panther',
  posterPath: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
  releaseDate: '2018-02-13',
  genres: ["Action","Adventure","Fantasy","Science Fiction"],
};

test('renders MovieTile component', () => {
  render(<MovieTile movieInfo={movieInfo} />);
  const titleElement = screen.getByText('Black Panther');
  expect(titleElement).toBeInTheDocument();

  // Add more assertions as needed for poster, release date, and genres
});
