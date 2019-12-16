import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  CustomInput from '../../../components/commons/CustomInput';
import  FooterContainer from '../../../containers/commons/FooterContainer';
import  PopupContainer from '../../../containers/commons/PopupContainer';
import  NavbarContainer from '../../../containers/commons/header/navbarContainer';

let base='Common';

storiesOf(`${base}`, module)
  .add('CustomInput', () => <CustomInput title="Hello"/>)
  .add('FooterContainer', () => <FooterContainer title="Hello"/>)
  .add('PopupComponent', () => <PopupContainer />)
  .add('NavBar', () => <NavbarContainer title="Hello"/>)

;
