import React from "react";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  margin: auto;
  background-color: black;
  padding: 0px;
  height: auto;
  width: 80%;
`;

function Header() {
  return (
    <HeaderContainer>
      <SearchBar></SearchBar>
      <Navbar></Navbar>
    </HeaderContainer>
  );
}
export default Header;
