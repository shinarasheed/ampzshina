import React, { Component } from 'react';
import SignupFirstStep from './SignupFirstStep';
import SignupSecondStep from './SignupSecondStep';
import Verification from '../Signup/Verification';

export default class Signup extends Component {
  state = {
    step: 1,
    fullName: '',
    userName: '',
    password: '',
    email: '',
    country: '',
    phoneNumber: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: '',
    gender: '',
    role: '',
    verificationCode: '',
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      fullName,
      userName,
      password,
      email,
      country,
      phoneNumber,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      gender,
      role,
      verificationCode,
    } = this.state;

    const values = {
      fullName,
      userName,
      password,
      email,
      country,
      phoneNumber,
      dayOfBirth,
      monthOfBirth,
      yearOfBirth,
      gender,
      role,
      verificationCode,
    };

    switch (step) {
      case 1:
        return (
          <SignupFirstStep
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <SignupSecondStep
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Verification
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      default:
        return <SignupFirstStep />;
    }
  }
}
