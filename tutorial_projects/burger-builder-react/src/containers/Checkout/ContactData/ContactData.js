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
        },
        validation: {
          required: true,
          valid: false
        }
      },
      street: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'Street',
          value: ''
        },
        validation: {
          required: true,
          valid: false
        }
      },
      zipCode: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'ZIP Code',
          value: ''
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          valid: false
        }
      },
      country: {
        fieldType: 'input',
        attributes: {
          type: 'text',
          placeholder: 'Country',
          value: ''
        },
        validation: {
          required: true,
          valid: false
        }
      },
      email: {
        fieldType: 'input',
        attributes: {
          type: 'email',
          placeholder: 'Your E-Mail',
          value: ''
        },
        validation: {
          required: true,
          valid: false
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
        },
        validation: {
          required: true,
          valid: false
        }
      },
    },
    loading: false
  }

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ loading: true })

    const formData = {};
    for (let field in this.state.orderForm) {
      formData[field] = this.state.orderForm[field].attributes.value
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
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

  validate(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid
    }
    return isValid;
  }

  changedHandler = (e, field) => {
    const updatedForm = { ...this.state.orderForm };
    updatedForm[field].attributes.value = e.target.value;

    const { attributes, validation } = updatedForm[field];
    validation.valid = this.validate(attributes.value, validation)
    console.log(validation)

    this.setState({
      orderForm: updatedForm
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

    console.log(formFieldsArray);

    let form = (
      <form onSubmit={this.orderHandler}>
        {formFieldsArray.map( (ele) => (
          <FormField
            key={ele.id}
            fieldType={ele.config.fieldType}
            attributes={ele.config.attributes}
            invalid={!ele.config.validation.valid}
            changed={(e) => this.changedHandler(e, ele.id)} />
        ))}
        <Button btnType='Success'>ORDER</Button>
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
