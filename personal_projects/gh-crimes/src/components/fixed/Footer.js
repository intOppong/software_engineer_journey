import React from 'react';

import Icons from 'components/general/Icons/Icons';
import 'styles/Footer.css';

const footer = (props) => {
  const socialIcons = ['facebook', 'twitter', 'instagram'];

  return (
    <footer className='Footer'>
  		<Icons wrapperClasses='icons-footer' items={socialIcons} link/>
      <p><a href="/">Back to top</a></p>
    </footer>
  )
}

export default footer
