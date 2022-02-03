import React from "react";
import styled from "styled-components";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";

const Main = styled.div`
  text-align: center;
  padding: 5px;
  height: auto;
  width: 85%;
  background-color: black;
`;

function MainContainer() {
  return (
    <Main>
      <FirstContainer></FirstContainer>
      <SecondContainer></SecondContainer>
    </Main>
  );
}

export default MainContainer;
