import React from 'react';
import magnifyingGlass from '@assets/magnifyingGlassIcon.svg';
import { Icon, SearchBox, SearchContainer } from './Search.styles';

const Search = () => {
  return (
    <SearchContainer>
      <SearchBox>
        <input type='search' placeholder='Search by tag'></input>
        <Icon><img 
        src={magnifyingGlass} 
        height={20}
        /></Icon>
      </SearchBox>
    </SearchContainer>
  );
};

export default Search;