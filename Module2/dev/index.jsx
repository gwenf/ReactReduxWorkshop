import React, { Component } from "react";
import ReactDOM from "react-dom";

require("./site.scss");

class App extends Component {
  render () {
    return (
      <Header title="Fire and Ice"/>
    );
  }
}

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  );
};

ReactDOM.render(<App />, document.getElementById('container'));

