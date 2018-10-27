import React from 'react';

import classes from './FormField.css'

const formField = (props) => {
  let field = null;

  const fieldClasses = [classes.FormField];
  if (props.invalid && props.touched) {
    fieldClasses.push(classes.Invalid);
  }

  switch (props.fieldType) {
    case 'input':
      field = <input
        className={fieldClasses.join(' ')}
        {...props.attributes}
        onChange={props.changed} />;
      break;
    case ('textarea'):
      field = <textarea
        className={fieldClasses.join(' ')}
        {...props.attributes}
        onChange={props.changed} />;
      break;
    case 'select':
      field = (
        <select
          className={fieldClasses.join(' ')}
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
      field = <input className={classes.FormField} {...props.attributes} />;
  }

  return (
    <div className={classes.Input} >
      <label className={classes.Label}>{props.label}</label>
      {field}
    </div>
  )
}

export default formField;
