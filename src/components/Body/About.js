import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  text-align: left;
  padding: 5px;
  padding-top: 20px;
  height: auto;
  color: #d4d3d2;
  font-size: 1em;
  @media (max-width: 780px) {
    font-size: 10px;
  }
`;

function About() {
  return (
    <AboutContainer>
      <h3>ABOUT</h3>
      <p>
        Sint quis anim velit consequat incididunt duis non. Enim ex et dolore
        irure Lorem ex enim dolore culpa voluptate occaecat. Quis consequat
        laborum adipisicing nulla.
      </p>
    </AboutContainer>
  );
}

export default About;
