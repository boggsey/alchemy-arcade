import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '.';
import fakeStore from '../../fakeStore';

describe('HomePage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<HomePage store={fakeStore} isAuthenticated />);

    expect(wrapper).toMatchSnapshot();
  });
});
