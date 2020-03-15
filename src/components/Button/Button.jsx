import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ name, func }) => {
  return (<button type="button" onClick={func} className="btn" id={`btn-${name}`}>{name.toUpperCase()}</button>);
};
export default Button;

Button.propTypes = {
  name: PropTypes.string,
  func: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  func: null,
};
