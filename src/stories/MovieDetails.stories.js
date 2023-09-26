    // src/stories/MovieDetails.stories.js
import React from 'react';
import MovieDetails from '../components/MovieDetails';

export default {
  title: 'MovieDetails',
  component: MovieDetails,
};

const movieInfo = {
  title: 'Inception',
  posterPath: 'https://image.tmdb.org/t/p/w500/p0Iylb1QFwzFQ2QqIgBc02u8Uy5.jpg',
  releaseDate: '2010-07-16',
  voteAverage: 8.8,
  overview: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
};

export const Default = () => <MovieDetails movieInfo={movieInfo} />;
