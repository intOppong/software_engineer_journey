import React from 'react';

import Icon from './Icon';
import 'styles/Icons.css';

const icons = (props) => {
  const iconList = props.items.map( name => {
    return <Icon key={name}
      name={name}
      link={props.link}
      linkClasses={props.linkClasses}
      clicked={props.clicked}
      text={props.text}/>
  })
  return (
    <div className={props.classes}>
      {iconList}
    </div>
  )
}

export default icons;
