import React from 'react';
import PropTypes from 'prop-types';

function Text (props) {
  return (
    <div>
      {props.text}
    </div>
  );
}

Text.propTypes = {
  text: PropTypes.string.isRequired
}

export default Text;