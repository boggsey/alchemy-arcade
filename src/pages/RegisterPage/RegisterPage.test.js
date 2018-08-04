import React from 'react';
import { shallow } from 'enzyme';
import RegisterPage from '.';

describe('RegisterPage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<RegisterPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
