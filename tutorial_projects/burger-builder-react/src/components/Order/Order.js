import React from 'react';

import classes from './Order.css';

const order = (props) => {
  const ingredients = []

  for (let name in props.ingredients) {
    ingredients.push({
      name,
      amount: props.ingredients[name],
    })
  }

  const ingredientOutput = ingredients.map( ing => {
    return <span
        style={{
            textTransform:'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            padding: '5px',
            border: '1px solid #ccc',
          }}
        key={ing.name}>{ing.name} ({ing.amount})</span>
  })

  return (
    <div className={classes.Order}>
  		<p>Ingredients: {ingredientOutput}</p>
  		<p>Price: <strong>${props.price.toFixed(2)}</strong></p>
  	</div>
  )
}



export default order
