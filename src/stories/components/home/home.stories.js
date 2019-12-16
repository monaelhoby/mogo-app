import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  SliderContainer from '../../../containers/Home/SliderContainer';
import  ProductItemContainer from '../../../containers/Home/ProductItemContainer/ProductItemContainer';
import HomePage from '../../../pages/HomePage';
import ProductContainer from '../../../containers/Home/ProductContainer';
import  ContactContainer from '../../../containers/Home/ContactContainer';

let base='Home';

storiesOf(`${base}`, module)
  .add('SliderContainer', () => <SliderContainer/>)
  .add('ProductItemContainer', () => <ProductItemContainer />)
  .add('ProductContainer', () => <ProductContainer/>)
  .add('ContactContainer', () => <ContactContainer/>)
  .add('HomePage', () => <HomePage />)

;
