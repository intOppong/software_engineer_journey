import React, { Component } from 'react';

import Header from './fixed/Header/Header';
import NewsCards from './home-page/newsCards/NewsCards';
import Icons from './general/Icons/Icons';
import Footer from './fixed/Footer';
import Wrapper from 'hoc/Wrapper';
import 'styles/App.css';

class App extends Component {
  render() {
    const socialIcons = ['facebook', 'twitter', 'instagram'];
    return (
      <Wrapper>
        <div className="container-fluid">
          <Icons type='icons-primary' items={socialIcons} link/>
          <Header />
          <NewsCards />
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
