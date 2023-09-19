import React from 'react';
import Counter from '../components/Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const InitialValue = Template.bind({});
InitialValue.args = {
  value: 42,
};
