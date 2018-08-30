import React from 'react';
import Text from './Text';
import PropTypes from 'prop-types';

function RawResults (props) {
  const { found } = props;
  let text;
  if (!found) {
    text = '';
  } else {
    text = JSON.stringify(found, null, 2);
  }
  const textProps = { text };
  return (<Text {...textProps} />);
}

RawResults.propTypes = {
  found: PropTypes.object
};

export default RawResults;
