import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BreadCrumbComponent from '../../../components/ShoppingCart/BreadCrumbComponent';
import ShoppingCartPage from '../../../pages/ShoppingCartPage';

let base='ShoppingCart';

storiesOf(`${base}`, module)
  .add('BreadCrumbComponent', () => <BreadCrumbComponent/>)
  .add('ShoppingCartPage', () => <ShoppingCartPage />)
;
