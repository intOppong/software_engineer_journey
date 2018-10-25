import React from 'react';

import Logo from 'components/general/Logo';
import NavigationItems from 'components/general/navigation/NavigationItems';

const header = (props) => (
  <div>
    <Logo />
  </div>
  <div>
    <nav>
      <NavigationItems />
    </nav>
  </div>
)

export default header
