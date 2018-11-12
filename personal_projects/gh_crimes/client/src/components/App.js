import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        home
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(App);
