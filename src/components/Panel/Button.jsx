import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = (props) => {
  const name = Object.keys(props).toString();
  return (<button type="button" className="btn" id={`btn-${name}`}>{name.toUpperCase()}</button>);
};
export default Button;

Button.propTypes = {
};

Button.defaultProps = {
};
