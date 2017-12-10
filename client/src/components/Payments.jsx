import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'

const Payments = ({ handleToken }) => {
  return (
    <div>
      <StripeCheckout
        name="Emaily"
        description="Get 5 credits for 5$"
        amount={500}
        token={token => handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Get Credits</button>
      </StripeCheckout>
    </div>
  )
}

export default connect(null, actions)(Payments)