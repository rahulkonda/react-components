import React from 'react';
import { storiesOf } from '@storybook/react';
import Dialog from '../layout/Dialog';

storiesOf('Dialog', module).add('Default', () => (
  <Dialog title="Sample Dialog" onClose={() => {}}>
    <div>Sample Content</div>
  </Dialog>
));
