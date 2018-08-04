import React from 'react';
import { shallow } from 'enzyme';
import fakeStore from '../../../fakeStore';
import RosterDelete from './RosterDelete.component';

describe('RosterDelete', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<RosterDelete store={fakeStore} playerId="" />);

    expect(wrapper).toMatchSnapshot();
  });
});
