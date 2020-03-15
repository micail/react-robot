import * as positionTypes from '../../redux/types/positionTypes';

describe('Add position types', () => {
  it('Should create a position', () => {
    const expected = 'CREATE_POSITION';
    expect(positionTypes.CREATE_POSITION).toEqual(expected);
  });
  it('Should read a position', () => {
    const expected = 'READ_POSITION';
    expect(positionTypes.READ_POSITION).toEqual(expected);
  });
  it('Should update a position', () => {
    const expected = 'UPDATE_POSITION';
    expect(positionTypes.UPDATE_POSITION).toEqual(expected);
  });
  it('Should delete a position', () => {
    const expected = 'DELETE_POSITION';
    expect(positionTypes.DELETE_POSITION).toEqual(expected);
  });
});
