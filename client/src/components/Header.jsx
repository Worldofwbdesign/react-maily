import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return 'Loading'
        break
      case false:
        return <a href="auth/google">Login with Google</a>
        break
      default:
        return <a href="api/logout">Logout</a>
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
          <li>{renderContent()}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)