import React from 'react';

import MainNavItem from './MainNavItem';
import 'styles/MainNav.css'

const mainNav = (props) => {

  return (

    <div className="MainNav py-1">
      <nav className="nav d-flex">
        <MainNavItem>Murder</MainNavItem>
        <MainNavItem>Football</MainNavItem>
        <MainNavItem>Showbiz</MainNavItem>
        <MainNavItem>Cyber</MainNavItem>
        <MainNavItem>Murder</MainNavItem>
        <MainNavItem>Football</MainNavItem>
        <MainNavItem>Showbiz</MainNavItem>
        <MainNavItem>Cyber</MainNavItem>
      </nav>
		</div>
  )
}



export default mainNav;
