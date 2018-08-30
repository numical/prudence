import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RawResults from '../components/RawResults.js';
import ResultsCount from '../components/ResultsCount';
import './container.css';

class Results extends Component {
  render () {
    const { props } = this;
    const { found } = props;
    return (
      <div id='results' className='Container_default'>
        <ResultsCount found={found} />
        <RawResults found={found} />
      </div>
    );
  }
}

Results.propTypes = {
  found: PropTypes.object
};

export default Results;
