import React from 'react';
import { Link } from 'react-router-dom';
import Error from './page-404.png';
import './style.scss';

const PageNotFound = () => {
  return (
    <div>
      <Link to='/'>
        <img className='error' src={Error} alt='page not found' />;
      </Link>
    </div>
  );
};

export default PageNotFound;
