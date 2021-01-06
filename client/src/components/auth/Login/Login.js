import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SignupForm from '../Signup/SignupFirstStep';
import { Input, Button } from '../../Globals/styledcomponents';
import '../../../styles/signup.scss';

const Login = () => {
  const [step, setStep] = useState('login');
  switch (step) {
    case 'login':
      return (
        <section>
          <div className="form__header">
            <h5>Login</h5>
          </div>
          <div className="signup__with__google">
            <Button>Login with Google</Button>
            <p>or</p>
            <p>Login with your Email</p>
          </div>
          <div className="mb-3">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <Input type="password" placeholder="password" />
          </div>

          <div className="mb-3">
            <Button>Login</Button>
          </div>
          <div className="signup__login">
            <p>
              Don't have an account?{' '}
              <Link onClick={() => setStep('signup')} className="login" to="#!">
                Signup
              </Link>
            </p>
          </div>
        </section>
      );

    case 'signup':
      return <SignupForm />;

    default:
      return (
        <section>
          <div className="form__header">
            <h5>Login</h5>
          </div>
          <div className="signup__with__google">
            <Button>Login with Google</Button>
            <p>or</p>
            <p>Login with your Email</p>
          </div>
          <div className="mb-3">
            <Input type="email" placeholder="Email" />
          </div>
          <div className="mb-3">
            <Input type="password" placeholder="password" />
          </div>

          <div className="mb-3">
            <Button>Login</Button>
          </div>
          <div className="signup__login">
            <p>
              Don't have an account?{' '}
              <Link className="login" to="#!">
                Signup
              </Link>
            </p>
          </div>
        </section>
      );
  }
};

export default Login;
