import React, { Component } from 'react';
import CharacterContainer from './CharacterContainer.jsx';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }
  componentDidMount() {
    
    axios.get('https://anapioficeandfire.com/api/characters/')
      .then((response) => {
        this.setState({
          characters: response.data
        });
      })
      .catch((error) => {
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
