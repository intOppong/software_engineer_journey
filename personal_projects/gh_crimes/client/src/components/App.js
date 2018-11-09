import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUser } from 'redux/actions';
import 'styles/App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        Welcome {this.props.auth.user.name}
        {/*console.log(this.props.auth)*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUser })(App);
