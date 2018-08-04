import React from 'react';
import { shallow } from 'enzyme';
import PlayerPage from '.';

describe('PlayerPage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<PlayerPage isAuthenticated receiveLogout={() => {}} />);

    expect(wrapper).toMatchSnapshot();
  });
});
