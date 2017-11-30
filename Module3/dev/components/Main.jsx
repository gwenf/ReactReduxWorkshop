import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNav from './TopNav.jsx';
import Home from './Home.jsx';
import CharacterPage from './CharacterPage.jsx';

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <TopNav />
        
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/character/:id' component={CharacterPage} />
          </div>
        </div>
      </Router>
    );
  };
}

export default Main;

