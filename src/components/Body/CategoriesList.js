import React, { useState } from "react";
import CategoriesItem from "./CategoriesItem";
import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: auto;
  width: 100%;
`;

function CategoriesList() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const list = [
    "COMEDY",
    "DRAMA",
    "ACTION",
    "FANTASTIC",
    "ROMANTIC",
    "ANIME",
    "ADVENTURE",
    "THRILLER",
    "MYSTIC",
    "SCIENCE",
    "MILITARY",
    "HISTORICAL",
    "WESTERN",
    "MUSICAL",
    "FAMILY",
    "SPORT",
  ];

  const handleOnClickItem = (name) => {
    console.log(name);
    setSelectedCategory(name);
  };
  return (
    <CategoriesContainer>
      {list?.map((category, index) => {
        return (
          <CategoriesItem
            onClick={handleOnClickItem}
            isSelected={selectedCategory}
            name={category}
          ></CategoriesItem>
        );
      })}
    </CategoriesContainer>
  );
}

export default CategoriesList;
