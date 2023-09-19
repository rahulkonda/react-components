import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/CounterClass';
import GenreSelect from './components/GenreSelect';
import MovieList from './components/MovieList';
import SearchForm from './components/SearchForm';
import MovieDetails from './components/MovieDetails';
import SortControl from './components/SortControl';

function App() {
  const [movies, setMovies] = useState([]);
  const [sortSelection, setSortSelection] = useState('releaseDate');

  const movieId = 181808; // Star Wars: The Last Jedi  

  const handleSelectionChange = (value) => {
    setSortSelection(value);
    // You can perform any additional actions based on the new selection here
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/movies');
        const data = await response.json();
        setMovies(data.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchData();
  }, []);

  const onSearch = (searchValue)=>{
    console.log('Search Value is:',searchValue);
    alert('search value is: '+searchValue);
  }
  const onGenreSelect = (selectedGenre)=>{
    console.log('Genre selected', selectedGenre);
    // alert('Genre selected is: '+selectedGenre);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter value={5}/>
        <br/>
        <SearchForm searchKey={'Hello'} onSearch={onSearch}/>
        <br/>
        
        <GenreSelect onSelect={onGenreSelect} genreList={['COMEDY','HORROR', 'CRIME']} selectedGenre={'CRIME'}/> */}
        <SortControl currentSelection={sortSelection} onSelectionChange={handleSelectionChange} />

        {/* <h2>Movies</h2>
      <MovieList movies={movies} /> */}
      {/* <MovieDetails movieId={movieId} /> */}
      </header>
      
    </div>
  );
}

export default App;
