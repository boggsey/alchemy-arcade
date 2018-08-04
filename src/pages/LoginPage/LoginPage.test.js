import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '.';

describe('LoginPage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<LoginPage isAuthenticated receiveLogout={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
