import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

const Container = styled.div`
  text-align: center;
  padding: 10px;
  height: auto;
  background-color: black;
`;

const Title = styled.h3`
  text-align: left;
  padding: 2px;
  color: white;
  font-size: 12px;
  background-color: #222020;
`;

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background-color: yellow;
  color: #222020;
  padding: 10px 20px;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjRhZTBmZTgxY2Y1ODFiOWVlYzgyYmZlNzhlZjY1NyIsInN1YiI6IjYxZmE5NDI0NmYzMWFmMDA2YTkwZTZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sRcgBHjzqM3dAby1Cp2ri3paZ7IWsGx_aLlIsEzlDVA",
  },
};

function SecondContainer() {
  const [list, setList] = useState(null);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/4/list/1", config)
      .then((response) => {
        setList(response.data.results);
        console.log(response.data);
      });
  }, []);
  return (
    <Container>
      <Title>WATCH FEATURED MOVIES</Title>
      <MovieContainer>
        {list?.map((movie, index) => {
          return index < 10 ? (
            <MovieItem
              key={index}
              imgUrl={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
              title={movie.title}
            />
          ) : (
            <></>
          );
        })}
      </MovieContainer>
      <ButtonContainer>
        <Button>SEE ALL MOVIES</Button>
      </ButtonContainer>
    </Container>
  );
}

export default SecondContainer;
