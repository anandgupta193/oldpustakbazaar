/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../nav/Nav';
import WishListStyles from './WishList.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getBooks } from '../../actions/BooksAction';
import SearchBar from '../search/SearchBar';

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
    dispatch(getBooks());
  });
  return (
    <div>
      <Header isWishList={false} />
      <div className={WishListStyles.headerWrapper}>
        <Navigation />
      </div>
      <div>
        <ul className={WishListStyles.actionBar}>
          <li><SearchBar /></li>
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
