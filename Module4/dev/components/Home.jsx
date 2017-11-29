import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer.jsx';

class Home extends Component {
  render () {
    return (
      <div className="home-container">
        <CharacterContainer />
      </div>
    );
  };
}

export default Home;
