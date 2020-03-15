import positionReducer from '../../redux/reducers/positionReducer';
import * as actions from '../../redux/actions/positionActions';

describe('Position reducer', () => {
  const INITIAL_STATE = {};
  it('Should return an initial state', () => {
    expect(positionReducer(undefined, {})).toEqual(INITIAL_STATE);
  });
  it('Should add a new position to the state', () => {
    expect(positionReducer(INITIAL_STATE, actions.createPosition({ x: 1, y: 5, f: 'W' }))).toEqual({ x: 1, y: 5, f: 'W' });
  });
  it('Should update the position in the state', () => {
    const state = { x: 1, y: 5, f: 'W' };
    expect(positionReducer(state, actions.updatePosition({ x: 2, y: 5, f: 'N' }))).toEqual({ x: 2, y: 5, f: 'N' });
  });
  it('Should delete the position from the state', () => {
    const state = { x: 2, y: 5, f: 'N' };
    expect(positionReducer(state, actions.deletePosition())).toEqual({});
  });
});
