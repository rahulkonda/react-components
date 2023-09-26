import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../layout/Dialog';

test('Dialog renders correctly', () => {
  const { asFragment } = render(
    <Dialog title="Sample Title" onClose={() => {}}>
      <div>Sample Content</div>
    </Dialog>
  );

  expect(asFragment()).toMatchSnapshot();
});
