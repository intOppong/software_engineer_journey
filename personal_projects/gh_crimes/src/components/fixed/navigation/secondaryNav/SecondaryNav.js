import React from 'react';

import 'styles/SecondaryNav.css';
import SecondaryNavItem from './SecondaryNavItem';

const secondaryNav = (props) => (
  <div className="SecondaryNav py-1 mb-3">
    <nav className="nav d-flex">
      <SecondaryNavItem>Wanted</SecondaryNavItem>
      <SecondaryNavItem>Missing</SecondaryNavItem>
      <SecondaryNavItem>Narcotics</SecondaryNavItem>
    </nav>
  </div>
)

export default secondaryNav;
