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
    case 'like':
      classes = 'far fa-thumbs-up';
      break;
    case 'dislike':
      classes = 'far fa-thumbs-down'
      break;
    case 'reply':
      classes = 'fas fa-reply';
      break;
    default:
      classes = '';
  }

  return (
    <Wrapper>
      {(props.link) && <a
        href="/"
        className={props.classes}
        onClick={props.clicked}><i className={classes}></i>{props.text}</a>}
      {(!props.link) && <span
        className={props.classes}
        onClick={props.clicked}><i className={classes} onClick={props.clicked} ></i>{props.text}</span>}
    </Wrapper>
  )
}



export default icon
