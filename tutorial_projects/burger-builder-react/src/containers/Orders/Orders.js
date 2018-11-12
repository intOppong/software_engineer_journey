import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axiosInstance from '../../axios-orders';
import axiosErrorHandler from '../../hoc/axiosErrorHandler/axiosErrorHandler';

class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axiosInstance.get('orders.json')
      .then( res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({loading: true, orders: fetchedOrders})
      })
      .catch( error => {
        this.setState({loading: true})
      })
  }
  render() {

    

    const orders = this.state.orders.map( (order) => {
      return (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price} />
      )
    })
    return (
      <div>
        {orders}
      </div>
    )
  }
}

export default axiosErrorHandler(Orders, axiosInstance);
