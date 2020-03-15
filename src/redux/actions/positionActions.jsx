import { CREATE_POSITION, UPDATE_POSITION, DELETE_POSITION } from '../types/positionTypes';

export const createPosition = (values) => ({
  type: CREATE_POSITION,
  values,
});

export const updatePosition = (values) => ({
  type: UPDATE_POSITION,
  values,
});

export const deletePosition = () => ({
  type: DELETE_POSITION,
});
