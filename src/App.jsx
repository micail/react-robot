import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';


import Table from './components/Table/Table';
import Panel from './components/Panel/Panel';
import Input from './components/Input/Input';

import { createPosition, updatePosition } from './redux/actions/positionActions';
import './App.css';

// TODO: This component has to be changed for a class component,
// or actions have to be exported to write tests // for them.

export const App = ({ position }) => {
  const [message, setReport] = useState(null);
  const dispatch = useDispatch();

  const matrix = [
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
    [0, 1, 2, 3, 4],
  ];

  const { x } = position;
  const { y } = position;
  const { f } = position;

  const place = (x, y, f) => {
    console.log('x', x)
    console.log('y', y)
    console.log('f', f)
    return dispatch(createPosition({ x, y, f }));
  };

  const right = () => {
    switch (f) {
      case 'N':
        return dispatch(updatePosition({ x, y, f: 'E' }));
      case 'E':
        return dispatch(updatePosition({ x, y, f: 'S' }));
      case 'S':
        return dispatch(updatePosition({ x, y, f: 'W' }));
      case 'W':
        return dispatch(updatePosition({ x, y, f: 'N' }));
      default:
        return dispatch(updatePosition({ x, y, f }));
    }
  };

  const left = () => {
    switch (f) {
      case 'N':
        return dispatch(updatePosition({ x, y, f: 'W' }));
      case 'W':
        return dispatch(updatePosition({ x, y, f: 'S' }));
      case 'S':
        return dispatch(updatePosition({ x, y, f: 'E' }));
      case 'E':
        return dispatch(updatePosition({ x, y, f: 'N' }));
      default:
        return dispatch(updatePosition({ x, y, f }));
    }
  };

  const increase = (p) => {
    if (p === 4) {
      return p;
    }
    return p + 1;
  };

  const decrease = (p) => {
    if (p === 0) {
      return p;
    }
    return p - 1;
  };

  const move = () => {
    switch (f) {
      case 'N':
        return dispatch(updatePosition({ x: increase(x), y, f }));
      case 'E':
        return dispatch(updatePosition({ x, y: increase(y), f }));
      case 'S':
        return dispatch(updatePosition({ x: decrease(x), y, f }));
      case 'W':
        return dispatch(updatePosition({ x, y: decrease(y), f }));
      default:
        return dispatch(updatePosition({ x, y, f }));
    }
  };

  const report = () => {
    const direction = {
      N: 'NORTH',
      E: 'EAST',
      S: 'SOUTH',
      W: 'WEST',
    };
    setReport(<p>{`${x},${y},${direction[f]}`}</p>);
  };

  return (
    <div className="App">
      <Table matrix={matrix} position={position} />
      <Panel commands={{
        move, left, right, report,
      }}
      />
      {message}
      <Input func={place} />
    </div>
  );
};

const position = {
  x: PropTypes.number,
  y: PropTypes.number,
  f: PropTypes.string,
};

App.propTypes = {
  y: PropTypes.number,
  x: PropTypes.number,
  position: PropTypes.shape(position),
};

App.defaultProps = {
  x: null,
  y: null,
  position: {
    x: null,
    y: null,
    f: null,
  },
};

export const mapStateToProps = (state) => ({ position: state.positionReducer });

export default connect(mapStateToProps)(App);
