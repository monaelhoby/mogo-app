import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
// import FontAwesome from 'react-fontawesome';

import {
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

var FontAwesome = require('react-fontawesome');

const NavItem = ({ item }) => (
  <div>
    <UncontrolledDropdown nav inNavbar className="static">
      <DropdownToggle nav caret>
        {item.label}
        <FontAwesome name='angle-down' />
      </DropdownToggle>
      <DropdownMenu right className="parent  main-menu">
        <div className="d-lg-flex">

          {
            item.subNav.map((sub) => {
              if (sub.label) {
                return (
                  <DropdownItem>
                  <div>
                    <h5>subNav.label</h5>
                    <NavLink className="img d-none d-lg-block d-xl-block" href="collections-audio.html">
                      <img height="30px" src={sub.image}
                        alt="..." /></NavLink>
                    <ul className="list-unstyled">

                      if(!sub.subNav){
                        sub.subNav.map((s) => <li><NavLink href="#">{s.label}</NavLink></li>)
                      }

                    </ul>
                  </div>
                </DropdownItem>
              )

            }else{
              return ( <DropdownItem className="d-none d-lg-block d-xl-block">
            <img width="400px" src="subNav.image"
              alt="" />
          </DropdownItem>)
        }
      }
       )
      }
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>

  </div>
);

export default NavItem;
