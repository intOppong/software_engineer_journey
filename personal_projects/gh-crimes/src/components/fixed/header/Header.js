import React, { Component } from 'react';

import Logo from './Logo';

import 'styles/Header.css'

class Header extends Component {

  state = {
    toggleSearchField: false
  }

  showSearchField = () => {
    this.setState( (prevState) => {
      return { toggleSearchField: !prevState.toggleSearchField}
    })
  }

  render () {
    let searchField = null;
    if (this.state.toggleSearchField) {
      searchField = <input type='search' placeholder='Search'/>
    }

    return (
      <header className="Header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {searchField}
            <btn className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"
                onClick={this.showSearchField}>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </btn>
            <a className="user btn btn-sm btn-outline-secondary" href="/">Sign up</a>
            {/*<img className='profile-img' src='https://i.imgur.com/gz3unZu.jpg' alt='profile' />*/}
          </div>
        </div>
      </header>
    )
  }
}



export default Header;
