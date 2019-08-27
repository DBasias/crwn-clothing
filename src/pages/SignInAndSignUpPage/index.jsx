import React from 'react';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import { SignInAndSignUpContainer } from './styles';

const SignInAndSingUpPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSingUpPage;
