import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../menuItem';
import "./index.css";

import {
  Nav } from 'reactstrap';

const NavBar = ({ navs}) => (<Nav className="mr-auto" navbar>
      { navs.map((nav)=>(<MenuItem key={nav.key} item={nav}/>))}
      </Nav>);


export default NavBar;


NavBar.propTypes = {
  navs: PropTypes.array.isRequired
}
