import React from 'react';
import { shallow } from 'enzyme';
import fakeStore from '../../../fakeStore';
import Register from './Register.component';

describe('Register', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<Register store={fakeStore} />);

    expect(wrapper).toMatchSnapshot();
  });
});
