import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SingleProductTabsDescraption from '../../../components/SingleProduct/singleProductTabsDescraption';
import SingleProductImagesComponent from '../../../components/SingleProduct/singleProductImage';
import SingleProductImageDescraption from '../../../components/SingleProduct/singleProductImageDescraption';
import SingleProductPage from '../../../pages/SingleProductPage';
import SingleProductSlider from '../../../components/SingleProduct/SingleProductSlider'
let base = 'SingleProduct';

storiesOf(`${base}`, module)
  .add('SingleProductTabsDescraption', () => <SingleProductTabsDescraption/>)
  .add('SingleProductImagesComponent', () => <SingleProductImagesComponent/>)
  .add('SingleProductImageDescraption', () => <SingleProductImageDescraption/>)
  .add('SingleProductSlider', () => <SingleProductSlider/>)
  .add('SingleProductIPage', () => <SingleProductPage/>)
;
