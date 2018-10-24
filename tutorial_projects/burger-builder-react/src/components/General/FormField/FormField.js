import React from 'react';

import classes from './FormField.css'

const input = (props) => {
  let inputElement = null;

  switch (props.fieldType) {
    case 'input':
      inputElement = <input className={classes.InputElement} {...props.attributes} />;
      break;
    case ('textarea'):
      inputElement = <textarea className={classes.InputElement} {...props.attributes} />;
      break;
    case 'select':
      inputElement = <select className={classes.InputElement} {...props.attributes} />;
      break;
    default:
      inputElement = <input className={classes.InputElement} {...props.attributes} />;
  }

  return (
    <div className={classes.Input} >
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;
