import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SurveyList from './surveys/SurveyList'


class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="fixed-action-btn">
          <Link to="surveys/new" className="btn-floating btn-large red">
            <i className="large material-icons">add</i>
            <SurveyList />
          </Link>
        </div>
      </div>
    )
  }
}

export default Dashboard