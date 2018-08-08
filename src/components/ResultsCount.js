import React from 'react';
import Text from "./Text";
import PropTypes from 'prop-types';

function ResultsCount(props) {
  const { found } = props;
  let text;
  if (!found) {
    text = 'No search yet';
  } else if (found.total_count) {
    text = `${found.total_count} items found`;
  } else {
    text = 'No matches found';
  }
  const textProps = { text };
  return (<Text {...textProps} />);
}

ResultsCount.propTypes = {
  found: PropTypes.object
};

export default ResultsCount;