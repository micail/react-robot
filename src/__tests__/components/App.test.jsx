import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import App, { mapStateToProps } from '../../App';

const mockStore = configureMockStore();

describe('App component', () => {
  it('should render correctly in "debug" mode', () => {
    const store = mockStore({ user: { username: 'Name', isLoggedIn: false } });
    const component = shallow(<Provider store={store}><App debug /></Provider>);
    expect(component).toMatchSnapshot();
  });
  it('should map state to props', () => {
    const state = { positionReducer: { x: 1, y: 1, f: 'S' } };
    const map = mapStateToProps(state);
    expect(map).toEqual({ position: { x: 1, y: 1, f: 'S' } });
  });
});
