import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';


import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
// import FontAwesome from 'react-fontawesome';
var FontAwesome = require('react-fontawesome');




// Nav Item Component

const MenuItem = ({ item }) => {
  return item.subNav ? NavItemwithSub(item) :
    (<NavItem>
      <NavLink href={item.link ? item.link : '#'} >{item.label}</NavLink>
    </NavItem>);
};

export default MenuItem;

MenuItem.propTypes = {
  item: PropTypes.object.isRequired
}

///===== simple sub menu item just label
const simpleSubMenuItem = (menu) => <li><NavLink href={menu.link ? menu.link : '#'}>{menu.label}</NavLink></li>

///=====  sub menu item depends on the menu type
const subMenu = (menu) => {

  let subs = menu.subNav ? menu.subNav.map((item) => simpleSubMenuItem(item)) : '';

  return menu.image ?
    (
      menu.label ? (
        <NavItem>
        <div>
        <NavLink className="img d-none d-lg-block d-xl-block" href={menu.link ? menu.link : '#'}>

          <h5>{menu.label}</h5>
          <img src={menu.image}
            alt="..." />
          <ul className="list-unstyled">
            {subs}
          </ul>
          </NavLink>

        </div>

      </NavItem>) :
        (<NavItem className="d-none d-lg-block d-xl-block">
        <NavLink  href={menu.link ? menu.link : '#'}>
        <img width="400px" src={menu.image}
          alt="" />
        </NavLink>
        </NavItem>))
    :
    (
    <NavItem>
      <NavLink  href={menu.link ? menu.link : '#'}>{menu.label}</NavLink>
    </NavItem>
    )
};





///=========Retun Menu item with sub depends on menu properties
const NavItemwithSub = (menu) => {


  //return sub menus dpend on feature value (collections or home)
  let subs = menu.subNav ?
    (
      menu.featured ?
        (<div className="d-lg-flex">{menu.subNav.map((item) => subMenu(item))}</div>)
        : menu.subNav.map((item) => subMenu(item))
    ) : '';


  return (
    <UncontrolledDropdown nav inNavbar className={menu.featured ? "static" : ''}>
      <DropdownToggle nav caret>
        {menu.label} <FontAwesome name='angle-down' />
      </DropdownToggle>
      <DropdownMenu right className="parent  main-menu">
        {subs}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}
