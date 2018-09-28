import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import * as actions from '../actions'

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name='Emaily' // header of the payment form
        description='$5 for 5 email credits'  // description for the payment form
        amount={500}      // amount in (default) USD cents 100cents = $1
        token={token => this.props.handleStripeToken(token)}  // token expects a callback function that will be called (with the token NOTE object we receive from stripe)
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    )
  }
}


export default connect(null, actions)(Payments);

/*
- actions is an object
- so the guess is that connect functions check the type of the mapDispatchToProps argument to make sure it's a
function before executing it ie (), then map the object keys as component props
  - if it's an object it will just do the mapping.
*/
/*

// so my imported actions file that i use in place of mapDispatchToProps will be sth like this
actions = {
  fetchUser: () => {
      return async function (dispatch) {
        const res = await axios.get('/api/current_user');
        dispatch({
          type: FETCH_USER,
          payload: res.data
        })
      }
    }
}
*/
