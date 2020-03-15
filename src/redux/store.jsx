import { createStore, combineReducers } from 'redux';
import positionReducer from './reducers/positionReducer';

const makeStore = () => {
  return createStore(combineReducers({
    positionReducer,
  }));
};

export default makeStore;
