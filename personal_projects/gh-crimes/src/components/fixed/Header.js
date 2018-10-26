import React from 'react';

import Logo from '../general/Logo';
import MainNav from '../general/navigation/mainNav/MainNav';
import SecondaryNav from '../general/navigation/secondaryNav/SecondaryNav';

const header = (props) => (

  <header>
		<div className='row mt-0 mx-auto'>
			<Logo />
			<MainNav />
      <SecondaryNav />
		</div>
	</header>
)

export default header;
