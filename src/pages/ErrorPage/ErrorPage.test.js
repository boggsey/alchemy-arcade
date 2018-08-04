import React from 'react';
import { shallow } from 'enzyme';
import ErrorPage from '.';

describe('ErrorPage', () => {
  it('Hasn\'t changed since the last snapshot', () => {
    const wrapper = shallow(<ErrorPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
