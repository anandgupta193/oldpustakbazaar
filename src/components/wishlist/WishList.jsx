/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import WishListStyles from './WishList.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getBooks } from '../../actions/BooksAction';
import SearchBar from '../search/SearchBar';
// import UploadButtons from '../sellbook/SellBook';

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  const getBooksJSX = (bookList) => {
    console.log(bookList);
    return bookList.BookDetails.map((element) => {
      console.log(element);
      return (
        <div key={element.Name}>
          <section className={WishListStyles.bookArticle}>
            <img alt={element.Name} className={WishListStyles.bookImage} src={element.image} />
            <section className={WishListStyles.actionButtons}>
              <Button variant="outlined" color="primary">Add to Cart</Button>
            </section>
          </section>
        </div>
      );
    });
  };

  const booksJSX = getBooksJSX(wishList);

  useEffect(() => {
    console.log('component mounted');
    dispatch(getBooks());
  });
  return (
    <div>
      <Header isWishList={false} />
      <div className={WishListStyles.headerWrapper}>
        <div className={WishListStyles.nav}>
          <ul className={WishListStyles.header}>
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
              <Button variant="contained" color="secondary">
                Terms & Conditions
              </Button>
            </li>
            <li>
              <Button variant="contained" color="secondary">
                Contact Us
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className={WishListStyles.actionBar}>
          <li><SearchBar /></li>
          {/* <li><UploadButtons /></li> */}
        </ul>
      </div>
      <div className={WishListStyles.bookWrapper}>
        {booksJSX}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default WishList;
