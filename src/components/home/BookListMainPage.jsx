import React from 'react';
import { NavLink } from 'react-router-dom';
import ListStyles from './BookListMainPage.scss';

const BookList = () => (

  <div>
    <div className={ListStyles.name}>
      <h1>Welcome To OldPustakBazaar</h1>
    </div>
    <div>
      <ul className={ListStyles.header}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about us">About Us</NavLink></li>
        <li><NavLink to="/terms and conditions">Terms & Conditions</NavLink></li>
        <li><NavLink to="/contact us">Contact us</NavLink></li>
        <div className={ListStyles.sider}>
          <li><NavLink to="/wishlist">Wishlist</NavLink></li>
          <li><NavLink to="/shopping cart">Shopping cart</NavLink></li>
          <li><NavLink to="/my account">My Account</NavLink></li>
        </div>
      </ul>
    </div>
    <div>
      <ul className={ListStyles.search}>
        <li><NavLink to="/shop Sale">Shop Sale</NavLink></li>
        <li><NavLink to="/Latest product">Latest Product</NavLink></li>
        <li><NavLink to="/blog">Read the Blog</NavLink></li>
      </ul>
    </div>
  </div>

);

export default BookList;
