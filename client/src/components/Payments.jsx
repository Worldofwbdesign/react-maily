import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const Payments = () => {
  return (
    <div>
      <StripeCheckout
        amount={500}
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    </div>
  )
}

export default Payments