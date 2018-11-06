import React from 'react';

import Icon from './Icon';
import 'styles/Icons.css';

const icons = (props) => {
  const iconList = props.items.map( name => {
    return <Icon key={name}
      name={name}
      link={props.link}
      classes={props.iconClasses}
      clicked={props.clicked}
      text={props.text}/>
  })
  return (
    <div className={props.wrapperClasses}>
      {iconList}
    </div>
  )
}

export default icons;
