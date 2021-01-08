import React, { useState } from 'react';

import SignupForm from '../Signup/index';
import Login from '../Login/Login';
import '../../../styles/signup.scss';

const Index = () => {
  const [step, setStep] = useState('login');
  switch (step) {
    case 'login':
      return <Login setStep={setStep} />;

    case 'signup':
      return <SignupForm />;

    default:
      return <Login setStep={setStep} />;
  }
};

export default Index;
