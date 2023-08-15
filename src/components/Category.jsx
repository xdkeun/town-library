import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Title from "./Title";
import Books from "./Books";
const CategoryButtonUl = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;
const CategoryButtonLi = styled.li`
  text-align: center;
  border: 1px solid black;
  border-radius: 30px;
  padding: 10px 30px;
  font-size: 18px;
  cursor:pointer;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: black;
      color: white;
    `};
`;

function Category() {
  const [categories, setCategories] = useState([
    "주식",
    "창업",
    "철학",
    "프론트엔드",
    "백엔드",
  ]);
  const [nowCategory, setNowCategory] = useState(categories[0]);
  function categoryButtonClickHandler(category) {
    setNowCategory(category);
  }
  return (
    <>
      <Title text="카테고리별 도서"></Title>
      <CategoryButtonUl>
        {categories.map((category, index) => (
          <CategoryButtonLi
            key={index}
            onClick={() => categoryButtonClickHandler(category)}
            isSelected={category === nowCategory}
          >
            {category}
          </CategoryButtonLi>
        ))}
      </CategoryButtonUl>
      <Books key={nowCategory} query={nowCategory} size="5" target="title" />
    </>
  );
}
export default Category;
