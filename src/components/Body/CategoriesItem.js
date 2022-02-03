import React from "react";
import styled from "styled-components";

const CategoryButton = styled.button`
  text-align: left;
  background-color: ${(props) => (props.isSelected ? "yellow" : "#222020")};
  padding: 5px;
  padding-left: 10px;
  height: auto;
  width: auto;
  color: gray;
  border-color: #222020;
  border: 1px, solid;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "black" : "#d4d3d2")};
  @media (max-width: 780px) {
    padding: 3px;
    font-size: 10px;
  }
`;

function CategoriesItem({ name, isSelected, onClick }) {
  const handleOnClick = (itemName) => {
    onClick(itemName);
  };

  return (
    <CategoryButton
      isSelected={isSelected === name}
      onClick={() => handleOnClick(name)}
    >
      {name}
    </CategoryButton>
  );
}
export default CategoriesItem;
