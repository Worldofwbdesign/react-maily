import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validationEmails from '../../utils/validationEmails'

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Resipient List', name: 'emails' }
]

class SurveyForm extends Component {

  renderFields = () =>
    FIELDS.map(({ label, name }) => <Field key={name} label={label} name={name} type="text" component={SurveyField}/>)

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.info(values))}>
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

  errors.emails = validationEmails(values.emails || '')

  FIELDS.forEach(({ label, name }) => {
    if (!values[name]) errors[name] = `You must provide value for ${label}`
  })

  return errors
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm)