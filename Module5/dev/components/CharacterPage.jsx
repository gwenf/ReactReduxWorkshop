import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CharacterPage extends Component {
  constructor() {
    super();
    this.state = {
      character: null
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter() {
    var _this = this;
    var id = this.props.match.params.id;
    axios.get('https://www.anapioficeandfire.com/api/characters/' + id)
      .then(function (res) {
        console.log(res)
        _this.setState({
          character: res.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    var { character } = this.state;
    if (character) {
      return (
        <div className="character-page-container">
          <h1>{character.aliases[0]}</h1>
        </div>
      );
    } else {
      return '';
    }
  };
}

export default withRouter(CharacterPage);
