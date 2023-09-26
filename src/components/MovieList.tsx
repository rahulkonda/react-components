import React, { FC } from 'react';
import MovieTile from './MovieTile';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  genres: string[];
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieTile
          key={movie.id}
          movieInfo={{
            title: movie.title,
            posterPath: movie.poster_path,
            releaseDate: movie.release_date,
            genres: movie.genres,
          }}
        />
      ))}
    </div>
  );
};

export default MovieList;
