import React, { Component } from 'react';

import Icons from 'components/general/Icons/Icons';
import Logo from 'components/general/Logo';
import 'styles/Head.css';

class Head extends Component {



  state = {
    toggleSearchField: false
  }

  showSearchField = () => {
    this.setState( (prevState) => {
      return { toggleSearchField: !prevState.toggleSearchField}
    })
  }

  render() {
    let searchField = null;
    if (this.state.toggleSearchField) {
      searchField = <input type='search' placeholder='Search'/>
    }
    return (
      <div className='Head col-12 p-0 my-2'>
        <Logo />
        <div>
          {searchField}
          <Icons type='icons-search' items={['search']} clicked={this.showSearchField} />
          <img className='profile-img' src='https://i.imgur.com/gz3unZu.jpg' alt='profile' />
        </div>
      </div>
    )
  }
}



export default Head;
