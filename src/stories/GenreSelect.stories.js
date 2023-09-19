// GenreSelect.stories.js

import React from 'react';
import GenreSelect from '../components/GenreSelect';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  genreList: ['COMEDY', 'HORROR', 'CRIME'],
  selectedGenre: 'CRIME',
  onSelect: (genre) => console.log('Selected genre:', genre),
};

export const DifferentSelection = Template.bind({});
DifferentSelection.args = {
  genreList: ['COMEDY', 'HORROR', 'CRIME'],
  selectedGenre: 'COMEDY',
  onSelect: (genre) => console.log('Selected genre:', genre),
};
