import React, { useState } from 'react';
import MovieDialog from '../components/MovieDialog';
import { Movie } from '../interface';

interface Module4Props {
  // Define any props you need for Module4
  // For example:
  someProp: string;
}

const Module4: React.FC<Module4Props> = ({ someProp }) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleOpenAddDialog = () => {
    setIsAddDialogOpen(true);
  };

  const handleCloseDialogs = () => {
    setIsAddDialogOpen(false);
    setIsEditDialogOpen(false);
    setSelectedMovie(null);
  };

  const handleOpenEditDialog = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsEditDialogOpen(true);
  };

  const handleAddMovie = (movie: Movie) => {
    // Handle adding the movie (e.g., sending to server, updating state, etc.)
    console.log('Adding movie:', movie);
    handleCloseDialogs();
  };

  const handleEditMovie = (movie: Movie) => {
    // Handle editing the movie (e.g., sending to server, updating state, etc.)
    console.log('Editing movie:', movie);
    handleCloseDialogs();
  };

  return (
    <div>
      <button onClick={handleOpenAddDialog}>Add Movie</button>
      <button onClick={() => handleOpenEditDialog({ title: 'Sample Movie', movieURL: 'sampleURL', genre: 'Action', releaseDate: '2023-09-28', rating: 'PG-13', runtime: '120 mins', overview: 'A sample movie overview.' })}>
        Edit Movie
      </button>

      {isAddDialogOpen && (
        <MovieDialog
          title="Add Movie"
          onClose={handleCloseDialogs}
          onSubmit={(movie: Movie) => handleAddMovie(movie)}
        />
      )}

      {isEditDialogOpen && selectedMovie && (
        <MovieDialog
          title="Edit Movie"
          initialMovieInfo={selectedMovie}
          onClose={handleCloseDialogs}
          onSubmit={(movie: Movie) => handleEditMovie(movie)}
        />
      )}
    </div>
  );
};

export default Module4;
