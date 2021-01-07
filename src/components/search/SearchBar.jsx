import React from 'react';
import SearchStyles from './SearchBar.scss';

const SearchBar = ({keyword,setKeyword}) => {
 
  return (
    <input 
     className={SearchStyles.bar}
     key="random1"
     value={keyword}
     placeholder={"Search Books"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;