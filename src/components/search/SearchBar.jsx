/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SearchStyles from './SearchBar.scss';
import { applyFilter } from '../../actions/BooksAction';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('');
  const onBooksFilter = () => {
    dispatch(applyFilter(searchKeyword));
  };
  return (
    <Paper>
      <InputBase
        placeholder="Search Books"
        inputProps={{ 'aria-label': 'search books' }}
        id="outlined"
        variant="outlined"
        label="Search Books"
        className={SearchStyles.bar}
        value={searchKeyword}
        onInput={(e) => { setSearchKeyword(e.target.value); }}
      />
      <IconButton onClick={onBooksFilter} type="submit" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
