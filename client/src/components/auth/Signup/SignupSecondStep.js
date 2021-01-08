import React from 'react';

import { Input, Button } from '../../Globals/styledcomponents';
const SignupSecondStep = ({ setStep, data, handleOnchange }) => {
  const { fullName } = data;
  return (
    <>
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
          name="fullName"
          value={fullName}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="fullName"
          value={fullName}
          type="password"
          placeholder="password"
        />
      </div>
      <div className="mb-3">
        <Input
          onChange={handleOnchange}
          name="fullName"
          value={fullName}
          type="email"
          placeholder="Email"
        />
      </div>
      <div className="mb-3 d-flex">
        <Button className="mr-2" onClick={() => setStep('firstStep')}>
          Back
        </Button>
        <Button>Register</Button>
      </div>
    </>
  );
};

export default SignupSecondStep;
