import React from 'react';
import PropTypes from 'prop-types';

const Place = ({ x, y }) => {
  return (
    <div className="place">
      <p>
        {x}
        ,
        {y}
      </p>
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
