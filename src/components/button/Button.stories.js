import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Component = Template.bind({});

Component.args = {
  text: 'Hello World',
};
