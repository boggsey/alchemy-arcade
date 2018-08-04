import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.component';

describe('Nav', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<Nav isAuthenticated receiveLogout={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
