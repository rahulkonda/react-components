import React, { FC } from 'react';
import '../styles/MovieTile.css'; // Import the CSS file for styling

interface MovieInfo {
  title: string;
  posterPath: string;
  releaseDate: string;
  genres: string[];
}

interface MovieTileProps {
  movieInfo: MovieInfo;
}

const MovieTile: FC<MovieTileProps> = ({ movieInfo }) => {
  const { title, posterPath, releaseDate, genres } = movieInfo;
  const releaseYear = new Date(releaseDate).getFullYear().toString(); // Extract year from the release date

  return (
    // <div className="movie-tiler">
        <div className="grid-container">
      <div className="grid-item">
        <div className="movie-image">
            <img src={posterPath} alt={`${title} Poster`} />
        </div>
        <div className="movie-details">
            <div className='movie-detail-left'>
            <div className="item-title">
            {title}
            </div>
            <div className="item-genre">
            {genres.join(', ')}
            </div>
            </div>
            <div className="item-release-year">
            {releaseYear}
            </div>
        </div>
      </div>

    </div>
  );
};

export default MovieTile;
