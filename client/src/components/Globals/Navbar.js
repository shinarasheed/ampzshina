import React from 'react';
import { Link } from 'react-router-dom';

import brandlogo from '../../assets/img/home/logowhite.png';
import posticon from '../../assets/img/home/posticon.png';
import '../../styles/navbar.scss';
import Searchbar from './Searchbar';
import SignupModal from '../auth/Signup/Modal';
import LoginModal from '../auth/Login/Modal';

const Navigation = () => {
  return (
    <nav className="navigation">
      <section>
        <Link to="/" className="navigation__logo">
          <img src={brandlogo} alt="brand log" />
        </Link>
        <article>
          <div className="navigation__link">
            <Link className="navigation__linkitem" to="/">
              Home
            </Link>
            <Link className="navigation__linkitem" to="#!">
              Explore
            </Link>
            <Link className="navigation__linkitem" to="#!">
              Manager
            </Link>
          </div>
          <div className="navigation__post__auth">
            <span className="navigation__posticon">
              <img src={posticon} alt="post icon" />
            </span>
            <Searchbar />

            <div className="navigation__authlink d-flex">
              <LoginModal buttonLabel="Login" />
              <SignupModal buttonLabel="Signup" />
            </div>
          </div>
        </article>
      </section>
    </nav>
  );
};

export default Navigation;
