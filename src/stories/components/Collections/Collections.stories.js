import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AsidebarComponent from '../../../components/Collections/asidebarComponent';
import  CollectionPage from '../../../pages/CollectionAudioPage';
import  HeaderAudio from '../../../components/Collections/HeaderAudioComponent';
import AudioProductContiner from '../../../containers/Collections/AudioProductContainer';
import MainProduct from '../../../components/Collections/mainAudioProcductComponent';
import MiddleNav from '../../../components/Collections/middleNav';
import CategoriesContainer from '../../../containers/Collections/CategoriesContainer';
import VendorsContainer from '../../../containers/Collections/VendorsContainer';
import PricesRange from '../../../components/Collections/PricesRange'
let base='Collections';

storiesOf(`${base}`, module)
  .add('Categories', () => <CategoriesContainer/>)
  .add('Vendors', () => <VendorsContainer/>)
  .add('pricesRange', () => <PricesRange/>)
  .add('asideBar', () => <AsidebarComponent/>)
  .add('HeaderAudio', () => <HeaderAudio/>)
  .add('Audio Product', () => <AudioProductContiner/>)
  .add('Main Audio Product', () => <MainProduct/>)
  .add('MiddleNav', () => <MiddleNav/>)
  .add('Collection Page', () => <CollectionPage/>)
;
