import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Input } from '../../Globals/styledcomponents';

const Login = ({ setStep }) => {
  return (
    <section>
      <div className="form__header">
        <h5>Login</h5>
      </div>
      <div className="signup__with__google">
        <Button>Login with Google</Button>
        <p>or</p>
        <p>Login with your Email or Username</p>
      </div>
      <div className="mb-3">
        <Input type="email" placeholder="Email/Username" />
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
};

export default Login;
