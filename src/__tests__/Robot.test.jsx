import React from 'react';
import { shallow } from 'enzyme';

import Robot from '../components/Robot/Robot';

describe('Robot component', () => {
  it('should render robot component', () => {
    const component = shallow(<Robot />);
    expect(component).toMatchSnapshot();
  });
  it('should face east', () => {
    const face = 'E';
    const component = shallow(<Robot f={face} />);
    expect(component.hasClass('E')).toEqual(true);
  });
  it('should face south', () => {
    const face = 'S';
    const component = shallow(<Robot f={face} />);
    expect(component.hasClass('S')).toEqual(true);
  });
  it('should face west', () => {
    const face = 'W';
    const component = shallow(<Robot f={face} />);
    expect(component.hasClass('W')).toEqual(true);
  });
  it('should face north', () => {
    const face = 'N';
    const component = shallow(<Robot f={face} />);
    expect(component.hasClass('N')).toEqual(true);
  });
});
