import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

export const text = 'Hello Button';

storiesOf('Button', module)
  .add('default', () => <Button text={text} />);