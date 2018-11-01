import React, { Component } from 'react';

import Header from 'components/fixed/header/Header';
import MainNav from 'components/fixed/navigation/mainNav/MainNav';
import SecondaryNav from 'components/fixed/navigation/secondaryNav/SecondaryNav';
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
        <Icons type='icons-primary' items={socialIcons} link/>
        <div class="container">
          <Header />
          <MainNav />
          <SecondaryNav />
      	</div>
        <main role="main" class="container">
          <NewsCards />
        </main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
