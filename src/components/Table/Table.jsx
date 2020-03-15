import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

import Place from './Place';

const Table = ({ matrix }) => (
  <div className="grid-container">
    {(matrix.map((row, x) => row.map((y) => <Place key={`${x}-${y}`} x={x} y={y} />))).reverse()}
  </div>
);

export default Table;

Table.propTypes = {
  matrix: PropTypes.arrayOf(Array),
};

Table.defaultProps = {
  matrix: [],
};
