import React from 'react';

import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const CONTROLS = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => {

  const buildControlList = CONTROLS.map( (ctrl, i) => {
    return <BuildControl
      key={ctrl.type}
      label={ctrl.label}
      more={() => props.addIngredient(ctrl.type)}
      less ={() => props.subtractIngredient(ctrl.type)}
      disabled={props.disabled[ctrl.type]} />
  })

  return (
    <div className={classes.BuildControls}>
      <p>Total Price: <strong>$ {props.price.toFixed(2)}</strong></p>
      {buildControlList}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
}

export default buildControls;
