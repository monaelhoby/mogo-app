
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  NavbarContainer from '../../containers/commons/header/navbarContainer';
import  NavbarContaineroptim from '../../containers/commons/header/navbarContainer/optimized';

import MenuItem from '../../components/commons/header/menuItem';
import NavBar from '../../components/commons/header/navBar';


let base='NavBar/';



storiesOf(`${base}Navbar`, module)
  .add('NavBar', () => <NavbarContainer title="Hello"/>)
  .add('NavBar Optim', () =>  <NavbarContaineroptim />)

;


storiesOf(`${base}Menu Item`, module)
.add('simple', () =>  <MenuItem item={{label:'test'}}/>)
.add('with Sub Menu ', () =>  <MenuItem item={{
  label: 'Home',
  key: 1,
  featured: false,
  subNav: [
    {
      label: 'Electronics -- v1'
    },
    {
      label: 'Clothing -- v2'
    },
    {
      label: 'Glasses -- v3'
    },
    {
      label: 'Fashion -- v4'
    },
    {
      label: 'Sport -- v5'
    },
    {
      label: 'Clothing -- v6'
    }

  ]
}}/>)
.add('with Sub Menu-Image', () =>  <MenuItem item={ {
  label: 'Collections',
  featured: true,
  subNav: [
    {
      label: 'Audio',
      image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image1-1529318948.jpg?7297526321082648272'
    },
    {
      label: 'Watches',
      image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image2-1529671083.jpg?2733869140958331324'
    },

    {
      label: 'Trackers',
      image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image3-1529318949.jpg?10749694202950556993'
    },
    {
      label: 'BowerBanks',
      image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image4-1534847224.jpg?11628935130427323281'
    },
    {
      image: "https://cdn.shopify.com/s/files/1/2235/6053/files/13_Popups_03_5df83d73-6153-4cb2-be19-223461f1d2a0.png?7761270253890243298"
    }

  ]
}}/>)
