import React from 'react';
import { shallow } from 'enzyme';
import fakeStore from '../../../fakeStore';
import { RosterList } from './RosterList.component';

const state = { RosterListReducer: {} };

describe('RosterList', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(
      <RosterList store={fakeStore} state={state} players={[]} getRosterList={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
