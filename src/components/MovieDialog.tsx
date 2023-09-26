import React from 'react';
import Dialog from '../layout/Dialog';
import MovieForm from './MovieForm';
import { Movie } from '../interface';

interface MovieDialogProps {
  title: string;
  onClose: () => void;
  initialMovieInfo?: Movie; // Update this to use the Movie type
  onSubmit: (movie: Movie) => void; // Update this to use the Movie type
}

const MovieDialog: React.FC<MovieDialogProps> = ({ title, onClose, initialMovieInfo, onSubmit }) => {
  return (
    <Dialog title={title} onClose={onClose}>
      <MovieForm initialMovieInfo={initialMovieInfo} onSubmit={onSubmit} />
    </Dialog>
  );
};

export default MovieDialog;

