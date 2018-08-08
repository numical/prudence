import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultsCount from '../components/ResultsCount';
import './Container.css';

class Results extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const { props } = this;
    const { found } = props;
    return (
      <div id='results' className='Container_default'>
        <ResultsCount found={found} />
      </div>
    );
  }
}

Results.propTypes = {
  found: PropTypes.array
};

export default Results;