import React from 'react';
import PropTypes from 'prop-types';
import './component.css';

function TextInput (props) {
  const { label, onChange, text } = props;
  const inputProps = {
    className: 'Component_default',
    id: label,
    onChange: onChange ? (event) => onChange(event.target.value) : null,
    value: (text) ? text : '',
    type: 'text'
  };
  const labelProps = {
    htmlFor: label
  };
  return (
    <div>
      <label {...labelProps}>{`${label}: `}</label>
      <input {...inputProps} />
    </div>
  );
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default TextInput;
