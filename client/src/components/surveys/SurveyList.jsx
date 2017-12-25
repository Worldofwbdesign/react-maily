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
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  surveys: state.surveys
})

export default connect(mapStateToProps, actions)(SurveyList)