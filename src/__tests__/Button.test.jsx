import React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Panel/Button';

describe('Button component', () => {
  let component;
  beforeAll(() => {
    component = shallow(<Button />);
  });

  it('should render button component', () => {
    expect(component).toMatchSnapshot();
  });
});
