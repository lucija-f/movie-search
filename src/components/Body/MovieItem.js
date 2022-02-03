import React from "react";
import styled from "styled-components";

const Movie = styled.div`
  text-align: center;
  margin: 3px;
  padding: 3px;
  height: 300px;
  background-color: black;
  width: 18%;
  height: auto;
`;

const Category = styled.p`
  color: white;
`;
const Title = styled.p`
  color: white;
  font-size: 12px;
  @media (max-width: 780px) {
    font-size: 10px;
  }
`;

const Image = styled.img`
  width 100%;
`;

function MovieItem(props) {
  return (
    <Movie>
      <Image src={props.imgUrl} />
      <Category>{props.category}</Category>
      <Title>{props.title}</Title>
    </Movie>
  );
}

export default MovieItem;
