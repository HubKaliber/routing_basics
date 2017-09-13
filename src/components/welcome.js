import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Welcome extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the Jungle</h1>
        <Link to={"/helloworld"}> <button>Jump To Hello World</button></Link>
      </div>
    );
  }
}

export default Welcome;
