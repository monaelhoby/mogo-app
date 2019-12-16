import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LoginPage from '../../../pages/LogInPage';
import LogInFormComponent from '../../../components/LoginFormComponent';

let base='LogIn';

storiesOf(`${base}`, module)
  .add('LoginPage', () => <LoginPage/>)
  .add('LogInFormComponent', () => <LogInFormComponent/>)
;
