

import React , {Component} from 'react';
import PropTypes from "prop-types";
import FontAwesome from 'react-fontawesome';
import "./index.css";


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="light" light expand="md"  fixed="top">
          <Container fluid={true}>
          <NavbarBrand href="/">
          <img src="https://cdn.shopify.com/s/files/1/2235/6053/files/logo_130x.png?v=1503470911" width="130px"
                alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Home
                <FontAwesome name='angle-down' />
              </DropdownToggle>
              <DropdownMenu right  className="main-menu">
                <DropdownItem>
                  Electronics -- v1
                </DropdownItem>
                <DropdownItem>
                  Clothing -- v2
                </DropdownItem>
                <DropdownItem>
                  Glasses -- v3
                </DropdownItem>
                <DropdownItem>
                  Fashion -- v4
                </DropdownItem>
                <DropdownItem>
                  Sport -- v5
                </DropdownItem>
                <DropdownItem>
                  Apparel -- v6
                </DropdownItem>
                <DropdownItem>
                  Clothing -- v2
                </DropdownItem>
                <DropdownItem>
                  Glasses -- v3
                </DropdownItem>
                <DropdownItem>
                  Fashion -- v4
                </DropdownItem>
                <DropdownItem>
                  Sport -- v5
                </DropdownItem>
                <DropdownItem>
                  Apparel -- v6
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar className="static">
              <DropdownToggle nav caret>
                COLLECTIONS <FontAwesome name='angle-down' />
              </DropdownToggle>
              <DropdownMenu right className="parent  main-menu">
              <div className="d-lg-flex">
                <DropdownItem>
                <div>
                  <h5>Audio</h5>
                  <NavLink className="img d-none d-lg-block d-xl-block" href="collections-audio.html">
                  <img height="30px" src="https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image1-1529318948.jpg?7297526321082648272"
                      alt="..."/></NavLink>

                  <ul className="list-unstyled">
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li className="dropright">
                      <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Built-in Microphone <i className="fas fa-angle-right"></i>
                      </span>
                      <ul className="dropdown-menu list-unstyled">
                        <li>item1</li>
                        <li>item2</li>
                        <li>item3</li>
                      </ul>
                    </li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                  </ul>
                </div>
                </DropdownItem>
                <DropdownItem>
                <div>
                  <h5>Watches</h5>
                  <NavLink className="img d-none d-lg-block d-xl-block" href="#"><img src="https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image2-1529671083.jpg?2733869140958331324"
                      alt="..."/>
                      </NavLink>
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                  </ul>
                </div>
                </DropdownItem>
                <DropdownItem>
                <div>
                  <h5>Trackers</h5>
                  <NavLink className="img d-none d-lg-block d-xl-block" href="#"><img src="https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image3-1529318949.jpg?10749694202950556993"
                      alt="..."/></NavLink>
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                  </ul>
                </div>
                </DropdownItem>
                <DropdownItem>
                <div>
                  <h5>Bower Banks</h5>
                  <NavLink className="img  d-none d-lg-block d-xl-block" href="#"><img src="https://cdn.shopify.com/s/files/1/2235/6053/t/2/assets/ato-menu-image4-1534847224.jpg?11628935130427323281"
                      alt="..."/></NavLink>
                  <ul className="list-unstyled">
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                    <li><NavLink href="#">Wireless</NavLink></li>
                  </ul>
                </div>
                </DropdownItem>
                <DropdownItem className="d-none d-lg-block d-xl-block">
                <img width="400px" src="https://cdn.shopify.com/s/files/1/2235/6053/files/13_Popups_03_5df83d73-6153-4cb2-be19-223461f1d2a0.png?7761270253890243298"
                  alt=""/>
                </DropdownItem>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/">BLOG</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">GALLERY</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                FEATURES <FontAwesome name='angle-down' />
                </DropdownToggle>
                <DropdownMenu right className="main-menu">
                  <DropdownItem >
                  <div className="dropright">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <NavLink href="product-page.html" >
                      Collection Page <i className="fas fa-angle-right"></i>
                      </NavLink>
                    </span>
                    <ul className="dropdown-menu list-unstyled">
                      <li>item1</li>
                      <li>item2</li>
                      <li>item3</li>
                    </ul>
                  </div>
                  </DropdownItem>
                  <DropdownItem>
                  <div className="dropright">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Fashion Page <i className="fas fa-angle-right"></i>
                    </span>
                    <ul className="dropdown-menu list-unstyled">
                      <li>item1</li>
                      <li>item2</li>
                      <li>item3</li>
                    </ul>
                  </div>
                  </DropdownItem>
                  <DropdownItem>
                  <div className="dropright">
                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Fashion Page <i className="fas fa-angle-right"></i>
                    </span>
                    <ul className="dropdown-menu list-unstyled">
                      <li>item1</li>
                      <li>item2</li>
                      <li>item3</li>
                    </ul>
                  </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <div className="icons">
            <NavLink href="#"><i className="fas fa-search"></i></NavLink>
            <div className="cog-dropdown">
            <NavLink href="#">
            <i className="far fa-user" id="navbarDropdown1" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false"></i>
              <div className="choose-language">
              <ul className="list-unstyled choose">
                <li><a href='/' >SignUp</a></li>
                <li><a href='/' >Login</a></li>
              </ul>
            </div>
              </NavLink>
              </div>
            <NavLink href="#"><i className="far fa-heart"></i></NavLink>
            <NavLink href="#"><i className="fas fa-luggage-cart"></i></NavLink>
            <div className="cog-dropdown">
            <NavLink href="#">
          <i className="fas fa-cog dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"></i>
          <div className="dropdown-menu  main-menu cog-settings" aria-labelledby="navbarDropdown">
            <div className="choose-language">
            <h5>Language is : <span className="_val">English</span> <span className="arrow"></span></h5>
            <ul className="list-unstyled choose">
              <li className="active">English</li>
              <li>Arabic</li>
              <li>France</li>
              <li>English</li>
              <li>English</li>
            </ul>
          </div>
            <div className="choose-currency">
            <h5>Currency is : <span className="_val">USD</span> <span className="arrow"></span></h5>
            <ul className="list-unstyled choose">
              <li>Eru</li>
              <li>GBP</li>
              <li className="active">USD</li>
              <li>AUD</li>
              <li>JPY</li>
            </ul>
          </div>
          </div>
        </NavLink>
        </div>
      </div>
    </Container>
  </Navbar>
    );
  }
}




export default NavbarContainer;
