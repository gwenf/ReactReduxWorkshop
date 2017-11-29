import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class CharacterPage extends Component {
  constructor () {
    super();
    this.state = {
      character: null
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount () {
    this.fetchCharacter();
  }

  fetchCharacter () {
    var _this = this;
    var id = this.props.match.params.id;
    axios.get(`https://www.anapioficeandfire.com/api/characters/${id}`)
      .then(function (res) {
        _this.setState({
          character: res.data
        });
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render () {
    return (
      <div className="character-page-container">
        <h1>Character Page</h1>
      </div>
    );
  };
}

export default withRouter(CharacterPage);
