import React from 'react';

const CharacterCard = ({ character }) => {

  return (
    <div className="character-card">
      <h3>{character.aliases[0]}</h3>
      <p>{character.culture.length > 1 ? `Culture: ${character.culture}` : ''}</p>
    </div>
  );
};

export default CharacterCard;
