import React from 'react';
import { shallow } from 'enzyme';
import SignInAndSignUpPage from './';

it('should render SignInAndSignUpPage component', () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
