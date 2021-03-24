import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HeaderStyles from './Header.scss';
import logo from '../../../public/logo.png';
import textLogo from '../../../public/textLogo.png';

const Header = ({ isWishList }) => {
  const wishList = useSelector((state) => state.wishList);
  return (
    <div className={HeaderStyles.headerWrapper}>
      <div className={HeaderStyles.oldPustakHeader}>
        <img className={HeaderStyles.logo} src={logo} alt="logo" />
        <img src={textLogo} className={HeaderStyles.logoText} alt="textLogo" />
      </div>
      <div className={HeaderStyles.actionNav}>
        <ul className={HeaderStyles.sider}>
          <li>
            <Link to="/">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
          </li>
          {
            isWishList && wishList.BookDetails.length > 0 && (
              <li>
                <Link to="/wishlist">
                  <Button variant="contained" color="primary">
                    WishList
                  </Button>
                </Link>
              </li>
            )
          }
          {
            !isWishList && wishList.BookDetails.length > 0 && (
              <li>
                <Button variant="contained" color="primary">
                  Clear WishList
                </Button>
              </li>
            )
          }
          <li>
            <IconButton color="primary" aria-label="add to shopping cart">
              Cart
              <AddShoppingCartIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  isWishList: PropTypes.bool.isRequired,
};

export default Header;
