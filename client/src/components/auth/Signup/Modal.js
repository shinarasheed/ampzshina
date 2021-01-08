import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Index from './index';
import '../../../styles/navbar.scss';
import '../../../styles/signupmodal.scss';

const SignupModal = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="signup__modal">
      <Link onClick={toggle} className="navigation__authlink-signup" to="/">
        {buttonLabel}
      </Link>
      <Modal centered isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Signup</ModalHeader>
        <ModalBody>
          <Index />
        </ModalBody>
        <ModalFooter>
          <p>footer</p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SignupModal;
