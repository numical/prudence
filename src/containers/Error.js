import React from 'react';
import Text from '../components/Text';
import PropTypes from "prop-types";

function Error (props) {
  const { error } = props;
  const errorMsg = (error instanceof Error) ? error.message : String(error);
  return (
    <div id='error' >
      <Text text='Sad Face :-(' />
      <Text text='Oh dear, we are sorry, the search reported an error:' />
      <Text text={errorMsg} />
      <Text text="Do try again! :-)" />
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object.isRequired
}

export default Error;
