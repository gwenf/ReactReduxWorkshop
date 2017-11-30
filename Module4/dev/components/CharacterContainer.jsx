import React, { Component } from 'react';
import CharacterCard from './CharacterCard.jsx';

class CharacterContainer extends Component {
  render () {
    return (
      <div className="character-container">
        {
          this.props.characters.map((character, i) => {
            return <CharacterCard key={i} character={character} />
          })
        }
      </div>
    );
  };
}

export default CharacterContainer;
