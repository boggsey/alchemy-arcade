import React from 'react';
import { shallow } from 'enzyme';
import App from './App.component';

describe('App', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});
