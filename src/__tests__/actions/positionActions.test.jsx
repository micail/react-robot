import * as actions from '../../redux/actions/positionActions';
import * as types from '../../redux/types/positionTypes';

describe('Position actions', () => {
  it('should create an action for creating a position', () => {
    const values = { x: 2, y: 4, f: 'S' };
    const expectedAction = {
      type: types.CREATE_POSITION,
      values,
    };
    expect(actions.createPosition(values)).toEqual(expectedAction);
  });
  it('should create an action for updating a position', () => {
    const values = { x: 3, y: 3, f: 'W' };
    const expectedAction = {
      type: types.UPDATE_POSITION,
      values,
    };
    expect(actions.updatePosition(values)).toEqual(expectedAction);
  });
  it('should create an action for deleting a position', () => {
    const expectedAction = {
      type: types.DELETE_POSITION,
    };
    expect(actions.deletePosition()).toEqual(expectedAction);
  });
});
