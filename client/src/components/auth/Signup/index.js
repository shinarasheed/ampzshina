import React, { useState } from 'react';

import '../../../styles/signup.scss';
import LoginForm from '../Login/index';
import SignupFirstStep from './SignupFirstStep';
import SignupSecondStep from './SignupSecondStep';

const Index = () => {
  const [step, setStep] = useState('firstStep');

  switch (step) {
    case 'firstStep':
      return <SignupFirstStep setStep={setStep} />;

    case 'login':
      return <LoginForm setStep={setStep} />;

    case 'secondStep':
      return <SignupSecondStep setStep={setStep} />;

    default:
      return <SignupFirstStep setStep={setStep} />;
  }
};

export default Index;
