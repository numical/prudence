import React, { Component } from 'react';
import PropTypes from "prop-types";
import Button from '../components/Button';
import './Container.css';

const defaultState = Object.freeze({
  queryString: 'wibble'
});

class Criteria extends Component {

  constructor (props) {
    super(props);
    this.state = {
      ...defaultState
    }
  }

  render () {
    const { props, state } = this;
    const { runSearch } = props;
    const { queryString } = state;
    const onClick = runSearch.bind(null, queryString);
    return (
      <div id='criteria' className='Container_default'>
        <Button text='Search' onClick={onClick} />
      </div>
    );
  }
}

Criteria.propTypes = {
  runSearch: PropTypes.func.isRequired
};

export default Criteria;