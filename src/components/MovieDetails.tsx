import React, { useEffect, useState } from 'react';
import '../styles/MovieDetails.css'; // Import the CSS file for styling

interface MovieDetailsProps {
  movieId: number;
}

interface MovieInfo {
  title: string;
  posterPath: string;
  releaseDate: string;
  voteAverage: number;
  overview: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movieId }) => {
  const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${movieId}`);
        const data = await response.json();
        const movieDetails: MovieInfo = {
          title: data.title,
          posterPath: data.poster_path,
          releaseDate: data.release_date,
          voteAverage: data.vote_average,
          overview: data.overview,
        };
        setMovieInfo(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="movie-details-container">
      {movieInfo ? (
        <>
          <div className="movie-poster">
            <img src={movieInfo.posterPath} alt={`${movieInfo.title} Poster`} />
          </div>
          <div className="movie-info">
            <h2>{movieInfo.title}</h2>
            <p>
              <strong>Release Year:</strong> {new Date(movieInfo.releaseDate).getFullYear()}
            </p>
            <p>
              <strong>Rating:</strong> {movieInfo.voteAverage}
            </p>
            <p>
              <strong>Description:</strong> {movieInfo.overview}
            </p>
          </div>
        </>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
  );
};

export default MovieDetails;
