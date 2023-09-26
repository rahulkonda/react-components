import React from 'react';
import { storiesOf } from '@storybook/react';
import MovieForm from '../components/MovieForm';

storiesOf('MovieForm', module).add('Default', () => <MovieForm onSubmit={() => {}} />);
