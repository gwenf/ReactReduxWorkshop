import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import TopNav from './TopNav.jsx';
import Home from './Home.jsx';
import CharacterPage from './CharacterPage.jsx';

class Main extends Component {
  render () {
    return (
      <Router>
        <div>
          <TopNav />

          <div className='container'>
            <Route exact={true} path='/' component={Home}/>
            <Route path='/character/:id' component={CharacterPage}/>
          </div>

        </div>
      </Router>
    );
  };
}

export default Main;

