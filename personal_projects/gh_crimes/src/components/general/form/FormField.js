import React from 'react';

import 'styles/formField.css';

const formField = (props) => {
  let field = '';

  let fieldClasses = [props.fieldClasses];
  if (props.invalid && props.touched) {
    fieldClasses.push('invalid')
  }

  switch (props.fieldType) {
    case 'input':
      field = <input
        className={fieldClasses.join(' ')}
        {...props.attributes}
        onChange={props.changed} />;
      break;
    case 'textarea':
      field = <textarea
      className={fieldClasses.join(' ')}
      {...props.attributes}
      onChange={props.changed} />;
      break;
    default:

  }
  return (
    <div className={props.wrapperClasses}>
      <label className={props.labelClasses}>{props.label}</label>
      {field}
    </div>
  )
}

export default formField;
