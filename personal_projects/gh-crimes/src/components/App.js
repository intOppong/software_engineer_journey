import React, { Component } from 'react';

import Header from './fixed/Header';
import NewsCards from './home-page/newsCards/NewsCards'
import 'styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <NewsCards />
      </div>
    );
  }
}

export default App;
