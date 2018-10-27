import React from 'react';


import Head from './Head'
import MainNav from 'components/general/navigation/mainNav/MainNav';
import SecondaryNav from 'components/general/navigation/secondaryNav/SecondaryNav';


const header = (props) => (

  <header>
		<div className='row mt-0 mx-auto'>
      <Head />
			<MainNav />
      <SecondaryNav />
		</div>
	</header>
)

export default header;
