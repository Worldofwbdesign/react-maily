import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class SurveyList extends Component {
  componentDidMount() {
    this.props.getSurveys()
  }
  
  render() {
    const { surveys } = this.props
    console.info(surveys)
    return surveys.map(({ title, body, yes, no }) =>
      <div key={title} className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>
          <p>{body}</p>
        </div>
        <div className="card-action white-text">
          <a>YES: {yes}</a>
          <a>NO: {no}</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys
})

export default connect(mapStateToProps, actions)(SurveyList)