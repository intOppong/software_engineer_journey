import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from 'components/fixed/header/Header';
import MainNav from 'components/fixed/navigation/mainNav/MainNav';
import SecondaryNav from 'components/fixed/navigation/secondaryNav/SecondaryNav';
import NewsCards from './home-page/newsCards/NewsCards';
import Icons from './general/Icons/Icons';
import Footer from './fixed/Footer';
import Wrapper from 'hoc/Wrapper';
import Article from './article-page/Article';
import 'styles/App.css';

class App extends Component {
  render() {
    const socialIcons = ['facebook', 'twitter', 'instagram'];
    return (
      <Wrapper>
        <Icons classes='icons-primary' items={socialIcons} link />
        <div class="container">
          <Header />
          <MainNav />
          <SecondaryNav />
      	</div>
        <main role="main" class="container">
          <Switch>
            <Route exact path='/' component={NewsCards} />
            <Route path='/article/:id' component={Article} />
            <Route exact path='/editor' render={() => (<div>Editor</div>)} />
            <Route path='*' component={NewsCards} />
          </Switch>
        </main>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
