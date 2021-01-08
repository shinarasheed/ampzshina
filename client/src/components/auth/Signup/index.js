import React, { useState } from 'react';

import '../../../styles/signup.scss';
import LoginForm from '../Login/index';
import SignupFirstStep from './SignupFirstStep';
import SignupSecondStep from './SignupSecondStep';

const Index = () => {
  const [step, setStep] = useState('firstStep');
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    email: '',
    gender: '',
    country: '',
    phoneNumber: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: '',
  });

  const {
    fullName,
    userName,
    password,
    email,
    gender,
    country,
    phoneNumber,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
  } = formData;

  const data = {
    fullName,
    userName,
    password,
    email,
    gender,
    country,
    phoneNumber,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
  };

  const handleOnchange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 'firstStep':
      return (
        <SignupFirstStep
          data={data}
          setFormData={setFormData}
          handleOnchange={handleOnchange}
          setStep={setStep}
        />
      );

    case 'login':
      return <LoginForm setStep={setStep} />;

    case 'secondStep':
      return <SignupSecondStep data={data} setStep={setStep} />;

    default:
      return (
        <SignupFirstStep
          data={data}
          setFormData={setFormData}
          handleOnchange={handleOnchange}
          setStep={setStep}
        />
      );
  }
};

export default Index;
