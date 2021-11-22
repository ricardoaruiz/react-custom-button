import React from 'react';
import { jsxDecorator } from "storybook-addon-jsx";

import { Button } from './index';

export default {
  title: 'RAR Custom Library/Button',
  component: Button,
  decorators: [jsxDecorator],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: false,
  onClick: () => console.log('teste')
}
