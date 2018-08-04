import React from 'react';
import { shallow } from 'enzyme';
import RosterPage from '.';

describe('RosterPage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<RosterPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
