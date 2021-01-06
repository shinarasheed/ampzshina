import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../Globals/styledcomponents';
import '../../../styles/signup.scss';
import LoginForm from '../Login/Login';

const SignupFirstStep = () => {
  const [step, setStep] = useState('firstStep');

  switch (step) {
    case 'firstStep':
      return (
        <section>
          <div className="form__header">
            <h5>Sign up</h5>
          </div>
          <div className="signup__with__google">
            <Button>Sign up with Google</Button>
            <p>or</p>
            <p>Sign up with your Email</p>
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="FullName" />
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="Username" />
          </div>
          <div className="mb-3">
            <Input type="password" placeholder="password" />
          </div>
          <div className="mb-3">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <Button onClick={() => setStep('secondStep')}>Continue</Button>
          </div>
          <div className="signup__login">
            <p>
              Already have an account?{' '}
              <Link onClick={() => setStep('login')} className="login" to="/">
                Login
              </Link>
            </p>
          </div>
        </section>
      );

    case 'login':
      return (
        <>
          <LoginForm />
        </>
      );

    case 'secondStep':
      return (
        <section>
          <div className="mb-3">
            <Input type="text" placeholder="FullName" />
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="Username" />
          </div>
          <div className="mb-3">
            <Input type="password" placeholder="password" />
          </div>
          <div className="mb-3">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mb-3 d-flex">
            <Button className="mr-2" onClick={() => setStep('firstStep')}>
              Back
            </Button>
            <Button>Register</Button>
          </div>
        </section>
      );

    default:
      return (
        <section>
          <div className="form__header">
            <h5>Sign up</h5>
          </div>
          <div className="signup__with__google">
            <Button>Sign up with Google</Button>
            <p>or</p>
            <p>Sign up with your Email</p>
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="FullName" />
          </div>
          <div className="mb-3">
            <Input type="text" placeholder="Username" />
          </div>
          <div className="mb-3">
            <Input type="password" placeholder="password" />
          </div>
          <div className="mb-3">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <Button onClick={() => setStep('secondStep')}>Continue</Button>
          </div>
          <div className="signup__login">
            <p>
              Already have an account?{' '}
              <Link className="login" to="/">
                Login
              </Link>
            </p>
          </div>
        </section>
      );
  }
};

export default SignupFirstStep;
