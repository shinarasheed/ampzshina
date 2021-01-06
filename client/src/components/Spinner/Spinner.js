import React from 'react';
import spinner from '../../assets/img/home/spinner.gif';
import './spinner.scss';

const Spinner = () => {
  return (
    <div className="post__spinner">
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
