// src/components/__tests__/MovieDetails.test.js
import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import MovieDetails from '../components/MovieDetails';
import '@testing-library/jest-dom/extend-expect';

const mockMovieData = {
  title: 'Inception',
  poster_path: 'https://image.tmdb.org/t/p/w500/p0Iylb1QFwzFQ2QqIgBc02u8Uy5.jpg',
  release_date: '2010-07-16',
  vote_average: 8.8,
  overview: 'A thief who steals corporate secrets...',
};

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockMovieData),
  })
);

test('renders MovieDetails component', async () => {
  const movieId = 123; // Replace with the actual movie ID
  await act(async () => {
    render(<MovieDetails movieId={movieId} />);
  });

  // Wait for the component to load
  await waitFor(() => expect(screen.getByText('Loading movie details...')).toBeInTheDocument());

  // Expect loading text to disappear and movie details to be visible
  expect(screen.queryByText('Loading movie details...')).not.toBeInTheDocument();

  // Check if movie details are rendered correctly
  expect(screen.getByText('Inception')).toBeInTheDocument();
  expect(screen.getByText('Release Year: 2010')).toBeInTheDocument();
  expect(screen.getByText('Rating: 8.8')).toBeInTheDocument();
  expect(screen.getByText('Description: A thief who steals corporate secrets...')).toBeInTheDocument();

  // Verify that fetch was called with the correct URL
  expect(global.fetch).toHaveBeenCalledWith(`http://localhost:4000/movies/${movieId}`);
});
