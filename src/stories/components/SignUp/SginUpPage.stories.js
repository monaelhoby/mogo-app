import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SignUpPage from '../../../pages/SignUpPage';
import SignUpFormComponent from '../../../components/SignUpFormComponent';

let base = 'SginUp';

storiesOf(`${base}`, module)
  .add('SignUpPage', () => <SignUpPage/>)
  .add('SignUpFormComponent', () => <SignUpFormComponent/>)

;
