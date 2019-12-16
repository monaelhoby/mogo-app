import React, {Component} from 'react';
import MogoNavBar from '../../../../components/commons/header/navBar';
import IconsnavComponent from '../../../../components/commons/header/iconsnavComponent';
import "./index.css";

import {Container, NavLink, NavbarBrand, Navbar, Collapse} from 'reactstrap';

class NavbarContaineroptim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (<Navbar color="light" light="light" expand="md" fixed="top">
      <Container fluid={true}>
        <NavbarBrand href="/">
          <img src="https://cdn.shopify.com/s/files/1/2235/6053/files/logo_130x.png?v=1503470911" width="130px" alt="logo"/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar="navbar">
          <MogoNavBar navs={navs}/>
        </Collapse>

        <IconsnavComponent />
      </Container>
    </Navbar>);
  }

}

export default NavbarContaineroptim;

const navs = [
  {
    label: 'Home',
    key: 1,
    featured: false,
    link:"/",
    subNav: [
      {
        label: 'Electronics -- v1',
        link:'/'
      }, {
        label: 'Clothing -- v2'
      }, {
        label: 'Glasses -- v3'
      }, {
        label: 'Fashion -- v4'
      }, {
        label: 'Sport -- v5'
      }, {
        label: 'Clothing -- v6'
      }

    ]
  }, {
    label: 'Collections',
    key: 2,
    featured: true,
    subNav: [
      {
        key: 1,
        link:"/collection",
        label: 'Audio',
        image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image1-1529318948.jpg?7297526321082648272'
      }, {
        key: 2,
        label: 'Watches',
        image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image2-1529671083.jpg?2733869140958331324'
      }, {
        key: 3,
        label: 'Trackers',
        image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image3-1529318949.jpg?10749694202950556993'
      }, {
        label: 'BowerBanks',
        image: 'https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image4-1534847224.jpg?11628935130427323281'
      }, {
        image: "https://cdn.shopify.com/s/files/1/2235/6053/files/13_Popups_03_5df83d73-6153-4cb2-be19-223461f1d2a0.png?7761270253890243298"
      }

    ]
  }, {

    label: 'blog',
    key: 3,
    featured: false

  }, {
    label: 'gallary',
    key: 4,
    featured: false

  }, {
    label: 'features',
    key: 5,
    featured: false,
    link:"/singleproduct"
  },
  // {
  //   label: 'LogIn',
  //   key: 5,
  //   featured: false,
  //   link:"/login"
  // }

]
