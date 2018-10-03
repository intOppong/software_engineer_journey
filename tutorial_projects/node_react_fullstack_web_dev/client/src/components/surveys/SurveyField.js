
/*
===============================================
- SurveyField contains logic to render a single label & text input
===============================================
*/

import React from 'react';

export default ({ input, meta: { error, touched }, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{marginBottom: '5px'}}/>
      <div className='red-text' style={{ marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  )
}
