import React from 'react';
import { Link } from 'react-router-dom';

import { Input, Button } from '../../Globals/styledcomponents';

const SignupFirstStep = ({ setStep, data, handleOnchange }) => {
  const { fullName, userName, password, email } = data;

  return (
    <>
      <div className="form__header">
        <h5>Sign up</h5>
      </div>
      <div className="signup__with__google">
        <Button>Sign up with Google</Button>
        <p>or</p>
        <p>Sign up with your Email</p>
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="fullName"
          value={fullName}
          type="text"
          placeholder="FullName"
        />
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="userName"
          value={userName}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="email"
          value={email}
          type="email"
          placeholder="Email"
        />
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
    </>
  );
};

export default SignupFirstStep;
