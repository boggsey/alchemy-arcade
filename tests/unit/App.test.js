import React from 'react';
import { shallow } from 'enzyme';
import Login from '../../src/components/Account/Login/Login.component';

describe('App', () => {
  const login = shallow(<Login />);

  it('renders the form', () => {
    expect(login.find('form').exists()).toBe(true);
  });
});
