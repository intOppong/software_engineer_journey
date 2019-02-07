import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Wrapper from 'hoc/Wrapper';
import Header from './header/Header';
import Editor from './editor-page/Editor';
import { fetchUser } from 'redux/actions';
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
        <main role="main" class="container">
          <Switch>
            {/*<Route exact path='/' component={NewsCards} />*/}
            {/*<Route path='/article/:id' component={Article} />*/}
            <Route exact path='/editor' component={Editor} />
            {/*<Route path='*' component={NewsCards} />*/}
          </Switch>
        </main>
      </Wrapper>
    );
  }
}

export default connect(null, { fetchUser })(App);
