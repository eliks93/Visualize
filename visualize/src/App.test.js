import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Splash from './components/Splash';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Splash Component', () => {
    expect(wrapper.containsMatchingElement(<Splash />)).toEqual(true);
  });
});

