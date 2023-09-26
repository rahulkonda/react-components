import React, { useState, useEffect } from 'react';
import { Movie } from '../interface'; 
import '../styles/MovieForm.css'; 

interface MovieFormProps {
  initialMovieInfo?: Movie;
  onSubmit: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovieInfo, onSubmit }) => {
  const initialFormState: Movie = initialMovieInfo || {
    title: '',
    movieURL: '',
    genre: '',
    releaseDate: '',
    rating: '',
    runtime: '',
    overview: '',
  };

  const [movieInfo, setMovieInfo] = useState<Movie>(initialFormState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setMovieInfo({ ...movieInfo, [name]: value });
  };

  const handleReset = () => {
    setMovieInfo(initialFormState);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(movieInfo);
  };

  useEffect(() => {
    setMovieInfo(initialFormState);
  }, []);

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="column1">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input-field"
            value={movieInfo.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column2">
          <label className="label" htmlFor="movieURL">
            Movie URL
          </label>
          <input
            type="url"
            id="movieURL"
            name="movieURL"
            className="input-field"
            value={movieInfo.movieURL}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="column1">
          <label className="label" htmlFor="genre">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="input-field"
            value={movieInfo.genre}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column2">
          <label className="label" htmlFor="releaseDate">
            Release Date
          </label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            className="input-field"
            value={movieInfo.releaseDate}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="column1">
          <label className="label" htmlFor="rating">
            Rating
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
            className="input-field"
            value={movieInfo.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="column2">
          <label className="label" htmlFor="runtime">
            Runtime
          </label>
          <input
            type="text"
            id="runtime"
            name="runtime"
            className="input-field"
            value={movieInfo.runtime}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      {/* Add the overview field */}
      <div className="form-row">
        <label className="label" htmlFor="overview">
          Overview
        </label>
        <textarea
          id="overview"
          name="overview"
          className="overview"
          value={movieInfo.overview}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="buttons">
        <button type="button" className="button reset-button" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" className="button submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MovieForm;
