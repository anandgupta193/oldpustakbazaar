/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from '../nav/Nav';
import ListStyles from './BookListMainPage.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { getBooks, addToWishList } from '../../actions/BooksAction';
import SearchBar from '../search/SearchBar';
// import UploadButtons from '../sellbook/SellBook';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const onAddToWishListClick = (e) => {
    const { name } = e.currentTarget.dataset;
    dispatch(addToWishList(name));
  };

  const getBooksJSX = (bookList) => {
    console.log(books);
    return bookList.BookDetails.map((element) => {
      console.log(element);
      return (
        <div key={element.Name}>
          <section className={ListStyles.bookArticle}>
            <img alt={element.Name} className={ListStyles.bookImage} src={element.image} />
            <section className={ListStyles.actionButtons}>
              <Button onClick={onAddToWishListClick} data-name={element.Name} variant="outlined" color="secondary">Wishlist</Button>
              <Button variant="outlined" color="primary">Add to Cart</Button>
            </section>
            <section className={ListStyles.attributes}>
              <section className={ListStyles.attributesName}>
                {`Name ${element.Name}`}
              </section>
              <section className={ListStyles.attributesName}>
                {`Rs ${element.Price} /-`}
              </section>
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
      <Header isWishList />
      <div className={ListStyles.headerWrapper}>
        <Navigation />
      </div>
      <div>
        <ul className={ListStyles.actionBar}>
          <li><SearchBar /></li>
          {/* <li><UploadButtons /></li> */}
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
