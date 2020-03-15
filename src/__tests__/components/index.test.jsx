import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import App from '../../App';

const mockStore = configureMockStore();
const store = mockStore({});

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('Application root', () => {
  // it('should render without crashing', () => {
  //   const div = document.createElement('div');
  //   div.id = 'root';
  //   document.body.appendChild(div);
  //   require('../../index.jsx');
  //   expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}><App /></Provider>, div);
  // });
});