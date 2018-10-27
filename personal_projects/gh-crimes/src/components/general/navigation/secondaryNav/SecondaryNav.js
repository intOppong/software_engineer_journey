import React from 'react';

import 'styles/SecondaryNav.css';
import SecondaryNavItem from './SecondaryNavItem';

const secondaryNav = (props) => (
  <nav className="SecondaryNav nav mb-4 col-12 p-0">
    <SecondaryNavItem>Wanted</SecondaryNavItem>
    <SecondaryNavItem>Missing</SecondaryNavItem>
    <SecondaryNavItem>Narcotics</SecondaryNavItem>
  </nav>
)

export default secondaryNav;
