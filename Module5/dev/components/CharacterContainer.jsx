import React, { Component } from 'react';
import CharacterCard from './CharacterCard.jsx';
import { Link } from 'react-router-dom';

class CharacterContainer extends Component {
  render () {
    return (
      <div className="character-container">
        {
          this.props.characters.map((character, i) => {
            var id = character.url.split('/').reverse()[0];
            return (
              <Link key={i} to={`/character/${id}`}>
                <CharacterCard character={character} />
              </Link>
            );
          })
        }
      </div>
    );
  };
}

export default CharacterContainer;
