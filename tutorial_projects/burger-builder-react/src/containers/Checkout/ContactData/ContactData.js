import React, { Component } from 'react';

import axiosInstance from '../../../axios-orders';
//import axiosErrorHandler from '../../../hoc/axiosErrorHandler/axiosErrorHandler';
import Button from '../../../components/General/Button/Button';
import Loading from '../../../components/General/Loading/Loading';
import classes from './ContactData.css';

class ContactData extends Component {

  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({
      loading: true
    })

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Lord Oppong',
        address: {
          street: 'Teststreet 1',
          zipCode: '4332',
          country: 'Ghana'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    }

    axiosInstance.post('/orders.json', order)
      .then( response => {
        this.setState({ loading: false});
        this.props.history.push('/');
      })
      .catch( errors => {
        this.setState({ loading: false});
      })
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder='Your name' />
        <input className={classes.Input} type="email" name="email" placeholder='Your Mail' />
        <input className={classes.Input} type="text" name="street" placeholder='Your Street' />
        <input className={classes.Input} type="text" name="postal" placeholder='Your Postal Code' />
        <Button
          btnType='Success'
          clicked={this.orderHandler}>ORDER</Button>
      </form>
    )
    if (this.state.loading) {
      form = <Loading />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
