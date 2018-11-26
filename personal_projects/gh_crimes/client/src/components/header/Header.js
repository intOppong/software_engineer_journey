import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import Modal from '../general/Modal';
import SignInWith from '../SignInWith';
import MainNav from './navigation/mainNav/MainNav';
import SecondaryNav from './navigation/secondaryNav/SecondaryNav';
import { fetchUser } from 'redux/actions';
import 'styles/Header.css';

class Header extends Component {

  state = {
    toggleSearchField: false,
    signIn: false
  }

  showSearchField = () => {
    this.setState( (prevState) => {
      return { toggleSearchField: !prevState.toggleSearchField}
    })
  }

  handleSignIn = () => {
    this.setState( (prevState) => {
      return { signIn: !prevState.signIn}
    })
  }

  handleCloseModal = () => {
    this.setState( (prevState) => {
      return { signIn: !prevState.signIn}
    })
  }

  render () {
    const auth = this.props.auth
    console.log(auth);
    let searchField = null;
    if (this.state.toggleSearchField) {
      searchField = <input type='search' placeholder='Search'/>
    }

    let loggedIn = <button
      className="user btn btn-sm btn-outline-secondary"
      onClick={this.handleSignIn}>Login / Sign up</button>

    if (auth.isAuth) {
      loggedIn =
        <img className='profile-img' src={auth.user.profile_img} alt='profile' />
    }

    return (
      <header className="Header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center mb-3">
          <div className="col-6">
            <Logo />
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            {searchField}
            <btn className="search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"
                onClick={this.showSearchField}>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <line x1="21" y1="21" x2="15.8" y2="15.8"></line>
              </svg>
            </btn>
            {loggedIn}
            <Modal show={this.state.signIn} closeModal={this.handleCloseModal}>
              <SignInWith />
            </Modal>
          </div>
        </div>
        <MainNav />
        <SecondaryNav />
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, { fetchUser })(Header);
