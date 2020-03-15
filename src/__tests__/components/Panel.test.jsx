import React from 'react';
import { mount } from 'enzyme';

import Panel from '../../components/Panel/Panel';

describe('Panel component', () => {
  let component;
  beforeAll(() => {
    component = mount(<Panel />);
  });

  it('should render panel component', () => {
    expect(component).toMatchSnapshot();
  });
  it('should render move button', () => {
    const button = component.find('#btn-move');
    expect(button).toMatchSnapshot();
  });
  it('should render left button', () => {
    const button = component.find('#btn-left');
    expect(button.exists()).toBeTruthy();
  });
  it('should render right button', () => {
    const button = component.find('#btn-right');
    expect(button.exists()).toBeTruthy();
  });
  it('should render report button', () => {
    const button = component.find('#btn-report');
    expect(button.exists()).toBeTruthy();
  });
});
