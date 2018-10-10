import React from 'react'

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

  // create array of BurgerIngredientList with provided ingredients
  let burgerIngredientList =
    Object.keys(props.ingredients)
      .map(igKey => {
        return [...Array(props.ingredients[igKey])]
          .map( (_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          });
      })
      .reduce((arr, ele) => {
        return arr.concat(ele);    // [].concat([])
      }, [])

  if (!burgerIngredientList.length) {
    burgerIngredientList = 'Please Add Ingredients!'
  }


  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
        {burgerIngredientList}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger;
