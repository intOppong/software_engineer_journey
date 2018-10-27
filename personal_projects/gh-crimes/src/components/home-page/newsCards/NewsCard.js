import React from 'react';

import 'styles/NewsCard.css';

const newsCard = (props) => {

  let cardClasses = ['card', 'NewsCard'];
  cardClasses.push(props.bgColor);
  cardClasses = cardClasses.join(' ');

  return (
    <div className={cardClasses}>
      <img className="card-img-top" src={props.image} alt="Card cap" />
      <div className="card-body">
        <p className="card-text">Some text inside the first card</p>
        <span className='small'><i className="far fa-eye"></i> 10</span>
      </div>
    </div>
  )
}



export default newsCard;
