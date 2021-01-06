import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LoginForm from './Login';
import '../../../styles/navbar.scss';
import '../../../styles/signupmodal.scss';

const SignupModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Link onClick={toggle} className="navigation__authlink-login" to="#!">
        {buttonLabel}
      </Link>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Signup</ModalHeader>
        <ModalBody>
          <LoginForm />
        </ModalBody>
        <ModalFooter>
          <p>footer</p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignupModal;
