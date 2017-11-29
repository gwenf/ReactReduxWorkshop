import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer.jsx';
import axios from 'axios';

class Home extends Component {
  constructor () {
    super();
    this.state = {
      characters: []
    };

    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  componentDidMount () {
    this.fetchCharacters();
  }

  fetchCharacters () {
    var _this = this;
    axios.get('https://www.anapioficeandfire.com/api/characters')
      .then(function (res) {
        _this.setState({
          characters: res.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div className="home-container">
        <CharacterContainer characters={this.state.characters} />
      </div>
    );
  };
}

export default Home;
