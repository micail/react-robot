import React from 'react';
import PropTypes from 'prop-types';

import Robot from '../Robot/Robot';

const Place = ({ x, y, position }) => {
  const robotRender = position.x === x && position.y === y ? <Robot f={position.f} /> : null;

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

const position = {
  x: PropTypes.number,
  y: PropTypes.number,
  f: PropTypes.string,
};

Place.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  position: PropTypes.shape(position),
};

Place.defaultProps = {
  x: null,
  y: null,
  position: {
    x: null,
    y: null,
    f: null,
  },
};
