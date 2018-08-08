import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Critera from './containers/Criteria';
import Error from "./containers/Error";
import Results from './containers/Results';
import { search } from './search/searchWrapper';

const methods = ['runSearch'];

const defaultState = Object.freeze({
  error: null,
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

  async runSearch (url, queryString) {
    try {
      const found = await search(url, queryString);
      this.setState({
        ...this.state,
        error: null,
        found
      });
    } catch (error) {
      this.setState({
        ...this.state,
        error,
        found: null
      });
    }
  }

  render () {
    const { runSearch, state } = this;
    const { error, found } = state;
    const criteriaProps = {
      runSearch
    };
    const results = (error)
      ? (<Error error={error}/>)
      : (<Results found={found} />);
    return (
      <div>
        <Critera {...criteriaProps} />
        {results}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));

