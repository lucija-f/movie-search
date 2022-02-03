import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ImageContainer from "./ImageContainer";

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

let config = {
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjRhZTBmZTgxY2Y1ODFiOWVlYzgyYmZlNzhlZjY1NyIsInN1YiI6IjYxZmE5NDI0NmYzMWFmMDA2YTkwZTZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sRcgBHjzqM3dAby1Cp2ri3paZ7IWsGx_aLlIsEzlDVA",
  },
};

function FirstContainer() {
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
    <HeroContainer>
      {list?.map((movie, index) => {
        return index < 5 ? (
          <ImageContainer
            isHero={index === 0}
            key={index}
            imgUrl={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
          />
        ) : (
          <></>
        );
      })}
    </HeroContainer>
  );
}

export default FirstContainer;
