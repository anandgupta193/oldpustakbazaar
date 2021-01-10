/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import ListStyles from './BookListMainPage.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getBooks } from '../../actions/BooksAction';
import SearchBar from '../search/SearchBar';
import UploadButtons from '../sellbook/SellBook';

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
          <li>
            <Button variant="contained" color="secondary" href="#contained-buttons">
              Home
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary" href="#contained-buttons">
              About Us
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary" href="#contained-buttons">
              Terms & Conditions
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary" href="#contained-buttons">
              Contact Us
            </Button>
          </li>
          <div className={ListStyles.sider}>
            <li>
              <Button variant="contained" color="primary" href="#contained-buttons">
                Login
              </Button>
            </li>
            <li>
              <Button variant="contained" color="primary" href="#contained-buttons">
                WishList
              </Button>
            </li>
            <li>
              <IconButton color="primary" aria-label="add to shopping cart">
                Cart
                <AddShoppingCartIcon />
              </IconButton>
            </li>
          </div>
        </ul>
      </div>
      <div>
        <ul className={ListStyles.ss}>
          <li><SearchBar /></li>
          <li><UploadButtons /></li>
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
