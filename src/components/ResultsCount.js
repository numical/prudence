import React from 'react';
import Text from "./Text";
import PropTypes from 'prop-types';

function ResultsCount(props) {
  const { found } = props;
  let text;
  if (!found) {
    text = 'No search yet';
  } else if (found.length > 0) {
    text = `${found.length} matches found`;
  } else {
    text = 'No matches found';
  }
  const textProps = { text };
  return (<Text {...textProps} />);
}

ResultsCount.propTypes = {
  found: PropTypes.array
};

export default ResultsCount;