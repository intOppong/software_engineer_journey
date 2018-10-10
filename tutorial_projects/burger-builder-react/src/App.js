import React, { Component } from 'react';

import classes from './App.css'
import Aux from './hoc/Aux';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.App}>
          <BurgerBuilder />
        </main>
      </Aux>
    );
  }
}

export default App;
