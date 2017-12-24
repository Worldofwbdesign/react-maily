import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validationEmails from '../../utils/validationEmails'
import formFields from './formFields'

class SurveyForm extends Component {

  renderFields = () =>
    formFields.map(({ label, name }) => <Field key={name} label={label} name={name} type="text" component={SurveyField}/>)

  render() {
    const { handleSubmit, onFormSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  errors.recipients = validationEmails(values.recipients || '')

  formFields.forEach(({ label, name }) => {
    if (!values[name]) errors[name] = `You must provide value for ${label}`
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm)