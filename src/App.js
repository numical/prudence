import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Critera from './containers/Criteria';
import Results from './containers/Results';
import { search } from './search/searchWrapper';

const methods = ['runSearch'];
const defaultState = Object.freeze({
  found: null
});

class App extends Component {

  constructor (props) {
    super(props);
    methods.forEach((method) => { this[method] = this[method].bind(this);});
    this.state = {
      ...defaultState
    }
  }

  async runSearch (queryString) {
    const found = await search(queryString);
    this.setState({
      ...this.state,
      found
    });
  }

  render () {
    const { runSearch, state } = this;
    const { found } = state;
    const criteriaProps = {
      runSearch
    };
    const resultsProps = {
      found
    };
    return (
      <div>
        <Critera {...criteriaProps} />
        <Results {...resultsProps} />
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));

