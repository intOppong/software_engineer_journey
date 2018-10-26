import React from 'react';

import MainNavItem from './MainNavItem';
import 'styles/MainNav.css'

const mainNav = (props) => {

  return (
    <nav className="MainNav nav col-12 mb-3 border-bottom">
      <MainNavItem>Murder</MainNavItem>
      <MainNavItem>Football</MainNavItem>
      <MainNavItem>Showbiz</MainNavItem>
      <MainNavItem>Cyber</MainNavItem>
    </nav>
  )
}



export default mainNav;
