import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import * as actions from '../../actions/index'

const componentName = ({ onCancel, formValues, submitSurvey, history }) => {
  
  const renderFieldValues = () =>
    formFields.map(({ label, name }) =>
      <div className="survey-field" key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  
  return (
    <div>
      <h5>Please confirm your entries</h5>
      {renderFieldValues()}
      <div style={{ marginTop: '30px' }}>
        <button className="yellow btn-flat darken-3 white-text" onClick={onCancel}>
          Cancel
        </button>
        <button
          className="green btn-flat right white-text"
          onClick={() => submitSurvey(formValues, history)}
        >
          Submit <i className="material-icons right">email</i>
        </button>
      </div>
    </div>

  )
}

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values
})

export default connect(mapStateToProps, actions)(withRouter(componentName))