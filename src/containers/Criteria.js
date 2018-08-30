import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import './container.css';

const methods = ['setQueryString', 'setURL'];

const defaultState = Object.freeze({
  queryString: null, // 'q=tetris+language:assembly',
  url: 'https://api.github.com/search/repositories'
});

class Criteria extends Component {
  constructor (props) {
    super(props);
    methods.forEach((method) => { this[method] = this[method].bind(this); });
    this.state = {
      ...defaultState
    };
  }

  setQueryString (queryString) {
    this.setState({
      ...this.state,
      queryString
    });
  }

  setURL (url) {
    this.setState({
      ...this.state,
      url
    });
  }

  render () {
    const { props, setQueryString, setURL, state } = this;
    const { runSearch } = props;
    const { queryString, url } = state;

    const containerProps = {
      id: 'criteria',
      className: 'Container_default'
    };
    const urlProps = {
      label: 'URL',
      onChange: setURL,
      text: url
    };
    const queryStringProps = {
      label: 'Query String',
      onChange: setQueryString,
      text: queryString
    };
    const buttonProps = {
      onClick: runSearch.bind(null, url, queryString),
      text: 'Search'
    };
    return (
      <div {...containerProps} >
        <TextInput {...urlProps} />
        <TextInput {...queryStringProps} />
        <Button {...buttonProps} />
      </div>
    );
  }
}

Criteria.propTypes = {
  runSearch: PropTypes.func.isRequired
};

export default Criteria;
