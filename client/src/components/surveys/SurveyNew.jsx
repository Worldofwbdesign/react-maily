import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

import './surveys.css'

class SurveyNew extends Component {
  state = { 
    showSurveyReview: false
   }
  
  render() {
    const { showSurveyReview } = this.state
    return (
      <div>
        {showSurveyReview
          ? <SurveyFormReview onCancel={() => this.setState({ showSurveyReview: false })}/>
          : <SurveyForm onFormSubmit={() => this.setState({ showSurveyReview: true })}/>
        }
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)