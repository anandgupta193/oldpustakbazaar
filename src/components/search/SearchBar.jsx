import React from 'react';
import { useDispatch } from 'react-redux';
import SearchStyles from './SearchBar.scss';
import { applyFilter } from '../../actions/BooksAction';

const SearchBar = () => {
  const dispatch = useDispatch();
  const onBooksFilter = (e) => {
    dispatch(applyFilter(e.target.value));
  };

  return (
    <input
      className={SearchStyles.bar}
      placeholder="Search Books"
      onChange={onBooksFilter}
    />
  );
};

export default SearchBar;
