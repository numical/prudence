import React from 'react';
import PropTypes from 'prop-types';

function ResultsCount(props) {
  const { found } = props;
  let msg;
  if (!found) {
    msg = 'No search yet';
  } else if (found.length > 0) {
    msg = `${found.length} matches found`;
  } else {
    msg = 'No matches found';
  }
  return (<div>{msg}</div>);
}

ResultsCount.propTypes = {
  found: PropTypes.array
};

export default ResultsCount;