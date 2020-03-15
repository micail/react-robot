import React from 'react';
import { shallow, mount } from 'enzyme';

import Place from '../../components/Place/Place';

describe('Place component', () => {
  it('should render place component', () => {
    const component = shallow(<Place />);
    expect(component).toMatchSnapshot();
  });

  it('should render robot on matching coordinates )', () => {
    const x = 5;
    const y = 5;
    const robotsPosition = {
      x: 5,
      y: 5,
      f: 'S',
    };
    const component = mount(<Place x={x} y={y} position={robotsPosition} />);
    const robot = component.find('#robot');
    expect(robot.exists()).toEqual(true);
    expect(robot.hasClass('S')).toEqual(true);
  });

  it('should NOT render robot on matching coordinates )', () => {
    const x = 0;
    const y = 5;
    const robotsPosition = {
      x: 5,
      y: 5,
      f: 'S',
    };
    const component = mount(<Place x={x} y={y} position={robotsPosition} />);
    const robot = component.find('#robot');
    expect(robot.exists()).toEqual(false);
  });
});
