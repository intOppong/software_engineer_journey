/*
===============================================
- SurveyForm contains logic to render a single label & text input
===============================================
*/


import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import _ from 'lodash';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';


class SurveyForm extends Component {

  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field key={name} type='text' component={SurveyField} name={name} label={label} />
      )
    });
  }

  render () {
    // same as renderFields method above: just for comparison
    const fields = formFields.map(({ label, name }, indx) => {
      return <Field key={indx} type='text' component={SurveyField} name={name} label={label} />
    });

    return (
      <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
        {fields}
        <Link to='/surveys' className='red btn-flat white-text'>
          Cancel
        </Link>
        <button type="submit" className="teal btn-flat right white-text">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    )
  }
}

function validate(values) {
  const errors = {}

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  })

  return errors;
}

export default reduxForm({
  form: 'surveyForm',
  validate,
  destroyOnUnmount: false
})(SurveyForm);
