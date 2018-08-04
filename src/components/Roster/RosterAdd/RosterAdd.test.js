import React from 'react';
import { shallow } from 'enzyme';
import fakeStore from '../../../fakeStore';
import RosterAdd from './RosterAdd.component';

describe('RosterAdd', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<RosterAdd store={fakeStore} />);

    expect(wrapper).toMatchSnapshot();
  });
});
