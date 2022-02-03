import React from "react";
import styled from "styled-components";

const ItemNav = styled.div`
  text-align: center;
  background-color: ${(props) =>
    props.isSelected ? "#333333" : "transparent"};
  padding: 15px;
  color: ${(props) => (props.isSelected ? "yellow" : "white")};
  border-color: transparent;
  cursor: pointer;
  font-weight: bold;
  @media (max-width: 780px) {
    padding: 10px;
    font-size: 10px;
  }
`;

function NavItem({ name, isSelected, onClick }) {
  const handleOnClick = (itemName) => {
    onClick(itemName);
  };

  return (
    <ItemNav
      isSelected={isSelected === name}
      onClick={() => handleOnClick(name)}
    >
      {name}
    </ItemNav>
  );
}
export default NavItem;
