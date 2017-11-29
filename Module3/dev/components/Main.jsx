import React, { Component } from 'react';
import Header from './Header.jsx';
import CharacterContainer from './CharacterContainer.jsx';

class Main extends Component {
  render () {
    return (
      <div>
        <Header />
        <CharacterContainer />
      </div>
    );
  };
}

export default Main;

