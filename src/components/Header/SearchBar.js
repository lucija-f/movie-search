import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchInput = styled.div`
  border-color: #000000;
  padding: 30px;
`;

const Search = styled.div`
  text-align: right;
`;

const Input = styled.input`
  background-color: #222020;
  border-color: #36353b;
  width: 20%;
  height: 20px;
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
`;

function SearchBar() {
  return (
    <Search>
      <SearchInput>
        <Input type="text" /> <FaSearch color="yellow" />
      </SearchInput>
    </Search>
  );
}
export default SearchBar;
