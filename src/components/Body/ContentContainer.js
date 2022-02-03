import React from "react";
import Aside from "./Aside";
import MainContainer from "./MainContainer";
import styled from "styled-components";

const Content = styled.div`
  margin: auto;
  display: flex;
  background-color: black;
  padding: 10px;
  height: auto;
  width: 80%;
`;

function ContentContainer() {
  return (
    <Content>
      <Aside />
      <MainContainer />
    </Content>
  );
}

export default ContentContainer;
