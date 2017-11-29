import React, { Component } from 'react';
import CharacterCard from './CharacterCard.jsx';

class CharacterContainer extends Component {
  render () {
    return (
      <div className="character-container">
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    );
  };
}

export default CharacterContainer;
