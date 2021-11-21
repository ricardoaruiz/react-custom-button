import React from 'react';
import { jsxDecorator } from "storybook-addon-jsx";

import { Button } from './index';

export default {
  title: 'RAR Custom Library/Button',
  component: Button,
  decorators: [jsxDecorator],
};


export const Primary = (args) => <Button {...args} />

