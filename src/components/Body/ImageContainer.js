import React, { useEffect } from "react";
import styled from "styled-components";

const Item = styled.div`
  width: ${(props) => (props.isHero ? "100%" : "48%")};
  padding: 3px;
  position: relative;
  text-align: center;
  color: white;
  @media (max-width: 710px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Title = styled.p`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => (props.isHero ? "42px" : "18px")};
  font-weight: bold;
  text-transform: uppercase;
  @media (max-width: 910px) {
    font-size: ${(props) => (props.isHero ? "32px" : "14px")};
    top: 50%;
    left: 50%;
  }
  @media (max-width: 710px) {
    font-size: ${(props) => (props.isHero ? "22px" : "22px")};
    top: 50%;
    left: 50%;
  }
  @media (max-width: 550px) {
    font-size: ${(props) => (props.isHero ? "18px" : "18px")};
    top: 50%;
    left: 50%;
  }
`;

const Text = styled.p`
  position: absolute;
  color: #f5c842;
  top: 85%;
  left: 50%;
  font-size: ${(props) => (props.isHero ? "16px" : "8px")};
  text-transform: uppercase;
  transform: translate(-50%, -50%);
  @media (max-width: 910px) {
    font-size: ${(props) => (props.isHero ? "14px" : "6px")};
    top: 80%;
    left: 50%;
  }
  @media (max-width: 710px) {
    font-size: ${(props) => (props.isHero ? "12px" : "12px")};
    top: 80%;
    left: 50%;
  }
  @media (max-width: 710px) {
    font-size: ${(props) => (props.isHero ? "8px" : "8px")};
  }
`;

function HeroImage({ imgUrl, isHero }) {
  console.log(imgUrl);
  return (
    <Item isHero={isHero}>
      <Image src={imgUrl} />
      <Title isHero={isHero}>Laboris velit ex Lorem</Title>
      <Text isHero={isHero}>
        Laboris velit ex Lorem enim Lorem do ex Lorem enim Lorem do
      </Text>
    </Item>
  );
}

export default HeroImage;
