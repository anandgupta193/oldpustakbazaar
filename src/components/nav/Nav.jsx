import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavStyles from './Nav.scss';

const Nav = () => {
  // eslint-disable-next-line no-console
  console.log('I am in Nav');
  return (
    <div className={NavStyles.nav}>
      <ul className={NavStyles.header}>
        <li>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Home
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <Button variant="contained" color="secondary">
              About Us
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/terms&condition">
            <Button variant="contained" color="secondary">
              Terms & Conditions
            </Button>
          </Link>
        </li>
        <li>
          <Button variant="contained" color="secondary" href="#contained-buttons">
            Contact Us
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
