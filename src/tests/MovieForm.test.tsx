import React from 'react';
import { render } from '@testing-library/react';
import MovieForm from '../components/MovieForm';

test('MovieForm renders correctly', () => {
  const { asFragment } = render(<MovieForm onSubmit={() => {}} />);

  expect(asFragment()).toMatchSnapshot();
});
