import * as positionTypes from '../types/positionTypes';

const INITIAL_STATE = {};

const positionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case positionTypes.CREATE_POSITION:
      return action.values;
    case positionTypes.UPDATE_POSITION:
      return { ...state, ...action.values };
    case positionTypes.DELETE_POSITION:
      return {};
    default:
      return state;
  }
};

export default positionReducer;
