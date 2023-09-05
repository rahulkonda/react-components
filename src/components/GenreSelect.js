import React, { Component } from 'react';

export default class GenreSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: props.selectedGenre,
    };
  }

  handleGenreClick = (genre) => {
    this.setState({ selectedGenre: genre });
    this.props.onSelect(genre);
  };

  render() {
    return (
      <>
        {this.props.genreList.map((genre) => (
          <button
            key={genre}
            className={this.state.selectedGenre === genre ? 'selected' : ''}
            onClick={() => this.handleGenreClick(genre)}
          >
            {genre}
          </button>
        ))}
      </>
    );
  }
}
