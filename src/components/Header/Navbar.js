import React, { useState } from "react";
import NavItem from "./NavItem";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  height: auto;
  width: 80%;
`;

const Logo = styled.img`
  width: 20%;
  height: 100%;
  margin-top: 2%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: linear-gradient(#333333, #111111);
  padding: 12px;
`;

function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("HOME");

  const handleOnClickItem = (name) => {
    console.log(name);
    setSelectedCategory(name);
  };

  return (
    <Container>
      <Logo src="https://i.postimg.cc/0Qvg4qdr/output-onlinepngtools.png"></Logo>
      <NavBar>
        <NavItem
          onClick={handleOnClickItem}
          isSelected={selectedCategory}
          name="HOME"
        ></NavItem>
        <NavItem
          onClick={handleOnClickItem}
          isSelected={selectedCategory}
          name="MOVIES"
        ></NavItem>
        <NavItem
          onClick={handleOnClickItem}
          isSelected={selectedCategory}
          name="TV SHOWS"
        ></NavItem>
      </NavBar>
    </Container>
  );
}

export default Navbar;
