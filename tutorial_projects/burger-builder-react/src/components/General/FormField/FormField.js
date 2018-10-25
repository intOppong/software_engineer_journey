import React from 'react';

import classes from './FormField.css'

const input = (props) => {
  let inputElement = null;

  switch (props.fieldType) {
    case 'input':
      inputElement = <input
        className={classes.FormField}
        {...props.attributes}
        onChange={props.changed} />;
      break;
    case ('textarea'):
      inputElement = <textarea
        className={classes.FormField}
        {...props.attributes}
        onChange={props.changed} />;
      break;
    case 'select':
      inputElement = (
        <select
          className={classes.FormField}
          value={props.attributes.value}
          onChange={props.changed} >
          {props.attributes.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break;
    default:
      inputElement = <input className={classes.FormField} {...props.attributes} />;
  }

  return (
    <div className={classes.Input} >
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  )
}

export default input;
