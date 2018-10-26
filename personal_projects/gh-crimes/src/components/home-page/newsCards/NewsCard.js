import React from 'react';

import 'styles/NewsCard.css';

const newsCard = (props) => {

  let cardClasses = ['card', 'NewsCard'];
  cardClasses.push(props.bgColor);
  cardClasses = cardClasses.join(' ');

  return (
    <div class={cardClasses}>
      <img class="card-img-top" src={props.image} alt="Card cap" />
      <div class="card-body">
        <p class="card-text">Some text inside the first card</p>
        <span class='small'><i class="far fa-eye"></i> 10</span>
      </div>
    </div>
  )
}



export default newsCard;
