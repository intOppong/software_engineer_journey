import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/General/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Loading from '../../components/General/Loading/Loading';
import axiosInstance from '../../axios-orders';
import axiosErrorHandler from '../../hoc/axiosErrorHandler/axiosErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }
  }

  componentDidMount() {
    axiosInstance.get('/ingredients.json')
      .then( response => {
        this.setState({ingredients: response.data});
      })
      .catch( error => {
        this.setState({error: true})
      })
  }

// ACTIONS
  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((total, ele) => {
        return total + ele
      }, 0)

    this.setState({
      purchasable: sum > 0
    })
  }

  addIngredientHandler = (type) => {
    // always copy state
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice
    })
    this.updatePurchasable(newIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }
    const newCount = oldCount -1;
    const newIngredients = {...this.state.ingredients};
    newIngredients[type] = newCount;

    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;

    this.setState({
      ingredients: newIngredients,
      totalPrice: newPrice
    })
    this.updatePurchasable(newIngredients);
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    })
  }

  purchaseContinueHandler = () => {
    const query = [];
    for (let i in this.state.ingredients) {
      query.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    query.push('price=' + encodeURIComponent(this.state.totalPrice));
    const queryStr = query.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryStr
    });
  }


  render() {

    const disabled = {};
    for (let key in this.state.ingredients) {
      disabled[key] = this.state.ingredients[key] <= 0
    }

    let burger = this.state.error ? <p>Ingredient's Couldn't be loaded</p> : <Loading />;
    let orderSummary = null;

    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            addIngredient={this.addIngredientHandler}
            subtractIngredient={this.removeIngredientHandler}
            disabled={disabled}
            purchasable={this.state.purchasable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler} />
        </Aux>
      );

      orderSummary = <OrderSummary
        ingredients={this.state.ingredients}
        cancelPurchase={this.purchaseCancelHandler}
        continuePurchase={this.purchaseContinueHandler}
        price={this.state.totalPrice} />
    }

    if (this.state.loading) {
      orderSummary = <Loading />
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    )
  }
}

export default axiosErrorHandler(BurgerBuilder, axiosInstance);
