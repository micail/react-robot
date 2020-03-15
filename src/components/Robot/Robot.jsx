import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as RobotImage } from './robot-solid.svg';
import './Robot.scss';

const Robot = ({ f }) => {
  return (
    <div id="robot" className={f}>
      <RobotImage />
    </div>
  );
};

export default Robot;

Robot.propTypes = {
  f: PropTypes.string,
};

Robot.defaultProps = { f: 'N' };
