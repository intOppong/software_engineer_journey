import React from 'react';

import 'styles/Backdrop.css';

const backdrop = (props) => (
  props.show ? <div className='Backdrop' onClick={props.clicked}></div> : null
)

export default backdrop;
