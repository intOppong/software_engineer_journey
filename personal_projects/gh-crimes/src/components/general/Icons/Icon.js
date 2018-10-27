import React from 'react';

import Wrapper from 'hoc/Wrapper';
const icon = (props) => {
  let classes = '';
  switch (props.name) {
    case 'facebook':
      classes = 'fab fa-facebook';
      break;
    case 'twitter':
      classes = 'fab fa-twitter';
      break;
    case 'instagram':
      classes = 'fab fa-instagram';
      break;
    case 'search':
      classes = 'fas fa-search';
      break;
    default:
      classes = '';
  }

  return (
    <Wrapper>
      {(props.link) && <a href="/"><i className={classes}></i></a>}
      {(!props.link) && <i
        className={classes}
        onClick={props.clicked} ></i>}
    </Wrapper>
  )
}



export default icon
