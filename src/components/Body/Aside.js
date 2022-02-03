import React from "react";
import CategoriesList from "./CategoriesList";
import styled from "styled-components";
import About from "./About";

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #131212;
  padding: 10px;
  height: auto;
  width: 15%;
`;

function Aside() {
  return (
    <AsideContainer>
      <CategoriesList />
      <About />
    </AsideContainer>
  );
}

export default Aside;
