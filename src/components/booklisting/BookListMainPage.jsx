/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ListStyles from './BookListMainPage.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getBooks } from '../../actions/BooksAction';
import SearchBar from '../search/SearchBar';
import SellBook from '../sellbook/SellBook';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const getBooksJSX = (bookList) => {
    console.log(books);
    return bookList.BookDetails.map((element, index) => {
      console.log(element);
      return (
        <div>
          <section className={ListStyles.bookArticle} key={element.Name}>
            <img alt={element.Name} className={ListStyles.bookImage} src={element[`image${index + 1}`]} />
            <section className={ListStyles.actionButtons}>
              <Button variant="outlined" color="secondary">Wishlist</Button>
              <Button variant="outlined" color="primary">Add to Cart</Button>
            </section>
          </section>
        </div>
      );
    });
  };

  const booksJSX = getBooksJSX(books);

  useEffect(() => {
    console.log('component mounted');
    dispatch(getBooks());
  });
  return (
    <div>
      <Header />
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
        <ul className={ListStyles.ss}>
          <li><SearchBar /></li>
          <li><SellBook /></li>
        </ul>
      </div>
      <div className={ListStyles.bookWrapper}>
        {booksJSX}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BookList;
