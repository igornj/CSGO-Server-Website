/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const buttonStyle = {
  margin: '10px 0',
};

const Button = ({ label, handleClick }) => (
  <button
    type="button"
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;
