import React from 'react';

import Icons from 'components/general/Icons/Icons';
import 'styles/Footer.css';

const footer = (props) => {
  const socialIcons = ['facebook', 'twitter', 'instagram'];

  return (
    <footer className='Footer'>
    	<div className="row mx-auto">
    		<Icons type='icons-footer' items={socialIcons} link/>
    	</div>
    </footer>
  )
}

export default footer
