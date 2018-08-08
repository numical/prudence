import React, { Component } from 'react';
import { render } from 'react-dom';
import Critera from './containers/Criteria';
import Results from './containers/Results';

class App extends Component {

  render() {
    return (
      <div>
        <Critera />
        <Results />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));

