import './App.css';
import Counter from './components/CounterClass';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

function App() {
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
        <Counter value={5}/>
        <br/>
        <SearchForm searchKey={'Hello'} onSearch={onSearch}/>
        <br/>
        <GenreSelect onSelect={onGenreSelect} genreList={['COMEDY','HORROR', 'CRIME']} selectedGenre={'CRIME'}/>
      </header>
      
    </div>
  );
}

export default App;
