import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Payments from './Payments'

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return 'Loading'
        break
      case false:
        return <li><a href="auth/google">Login with Google</a></li>
        break
      default:
        return [
          <li key={1}><Payments/></li>,
          <li key={2}><a href="api/logout">Logout</a></li>
        ]
    } 
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={auth ? '/surveys': ''}
          className="brand-logo">
          Emaily
        </Link>
        <ul id="nav-mobile" className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)