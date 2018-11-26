import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from 'redux/actions';
import Wrapper from 'hoc/Wrapper';
import Header from './header/Header';
import 'styles/App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Wrapper>
        <div class="container">
          <Header />
        </div>
        {/*<li><a href="/api/auth/google">Login with Google</a></li>;*/}
        <main role="main" class="container">

        </main>
      </Wrapper>
    );
  }
}

export default connect(null, { fetchUser })(App);
