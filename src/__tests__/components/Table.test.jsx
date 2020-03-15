import React from 'react';
import { shallow, mount } from 'enzyme';

import Table from '../../components/Table/Table';

describe('Table component', () => {
  it('should render table component', () => {
    const component = shallow(<Table />);
    expect(component).toMatchSnapshot();
  });
  it('should render 25 places in the table', () => {
    const matrix = [
      [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
      [0, 1, 2, 3, 4], [0, 1, 2, 3, 4],
      [0, 1, 2, 3, 4],
    ];
    const flatten = matrix.reduce((sum, a) => sum + a.length, 0);
    const component = mount(<Table matrix={matrix} />);
    expect(component.find('.place').length).toEqual(flatten);
  });
});
