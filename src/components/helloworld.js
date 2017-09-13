import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HelloWorld extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Link to={"/welcome"}>Jump To Welcome</Link>
      </div>
    );
  }
}

export default HelloWorld;
