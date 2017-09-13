import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Welcome from './components/welcome'
import HelloWorld from './components/helloworld'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route path="/welcome" component={Welcome}/>
              <Route path="/helloworld" component={HelloWorld}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
