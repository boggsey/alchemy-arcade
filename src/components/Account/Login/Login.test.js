import React from 'react';
import { shallow } from 'enzyme';
import fakeStore from '../../../fakeStore';
import Login from './Login.component';

describe('Login', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<Login store={fakeStore} />);

    expect(wrapper).toMatchSnapshot();
  });
});
