// src/stories/MovieTile.stories.js
import React from 'react';
import MovieTile from '../components/MovieTile';

export default {
  title: 'MovieTile',
  component: MovieTile,
};

const movieInfo = {
  title: 'Inception',
  posterPath: 'https://image.tmdb.org/t/p/w500/p0Iylb1QFwzFQ2QqIgBc02u8Uy5.jpg',
  releaseDate: '2010-07-16',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
};

export const Default = () => <MovieTile movieInfo={movieInfo} />;
