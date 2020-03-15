import React from 'react';
import PropTypes from 'prop-types';

import Robot from '../Robot/Robot';

const Place = ({ x, y }) => {
  const position = { x: 0, y: 0 };
  const robotRender = position.x === x && position.y === y ? <Robot /> : null;

  return (
    <div className="place">
      <p>
        {x}
        ,
        {y}
      </p>
      {robotRender}
    </div>
  );
};

export default Place;

Place.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
};

Place.defaultProps = {
  x: null,
  y: null,
};
