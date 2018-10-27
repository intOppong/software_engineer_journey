import React from 'react';

import Icon from './Icon';
import 'styles/Icons.css';

const icons = (props) => {
  const iconList = props.items.map( name => {
    return <Icon key={name} name={name} link={props.link} clicked={props.clicked}/>
  })
  return (
    <div className={props.type}>
      {iconList}
    </div>
  )
}

export default icons;