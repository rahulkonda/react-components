import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GenreSelect from '../components/GenreSelect';

describe('GenreSelect component', () => {
  const genreList = ['COMEDY', 'HORROR', 'CRIME'];
  const selectedGenre = 'CRIME';
  const onSelect = jest.fn();

  it('should render all genres passed in props', () => {
    render(<GenreSelect genreList={genreList} selectedGenre={selectedGenre} onSelect={onSelect} />);

    genreList.forEach((genre) => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  it('should highlight the selected genre passed in props', () => {
    render(<GenreSelect genreList={genreList} selectedGenre={selectedGenre} onSelect={onSelect} />);

    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass('selected');
  });

  it('should call "onSelect" callback with the correct genre after a click event', () => {
    render(<GenreSelect genreList={genreList} selectedGenre={selectedGenre} onSelect={onSelect} />);

    const genreToSelect = 'COMEDY';
    const genreButton = screen.getByText(genreToSelect);

    fireEvent.click(genreButton);

    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(genreToSelect);
  });
});
