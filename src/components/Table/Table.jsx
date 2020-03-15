import React from 'react';
import PropTypes from 'prop-types';

import Place from '../Place/Place';
import './Table.scss';


const Table = ({ matrix, position }) => (
  <div className="grid-container">
    {(matrix.map((row, x) => row.map((y) => <Place key={`${x}-${y}`} x={x} y={y} position={position} />))).reverse()}
  </div>
);

export default Table;

Table.propTypes = {
  matrix: PropTypes.arrayOf(Array),
};

Table.defaultProps = {
  matrix: [],
};
