import React, { Component } from 'react';

import axiosInstance from '../../../axios-orders';
//import axiosErrorHandler from '../../../hoc/axiosErrorHandler/axiosErrorHandler';
import Button from '../../../components/General/Button/Button';
import Loading from '../../../components/General/Loading/Loading';
import classes from './ContactData.css';
import FormField from '../../../components/General/FormField/FormField';

class ContactData extends Component {

  state = {
    orderForm: {
      name: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'Your Name',
          value: ''
        }
      },
      street: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'Street',
          value: ''
        }
      },
      zipCode: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'ZIP Code',
          value: ''
        }
      },
      country: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'Country',
          value: ''
        }
      },
      email: {
        fieldType: 'input',
        attributes: {
          type: 'email',
          placeholder: 'Your E-Mail',
          value: ''
        }
      },
      deliveryMethod: {
        fieldType: 'select',
        attributes: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ],
          value: ''
        }
      },
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
      price: this.props.price
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

    const formFieldsArray = [];
    for (let key in this.state.orderForm) {
      formFieldsArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }

    let form = (
      <form>
        {formFieldsArray.map( (ele) => (
          <FormField
            key={ele.id}
            fieldType={ele.config.fieldType}
            attributes={ele.config.attributes} />
        ))}
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
