import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main.component';

describe('Main', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<Main isAuthenticated />);

    expect(wrapper).toMatchSnapshot();
  });
});
