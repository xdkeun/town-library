import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Books from "./Books";
import Title from "./Title";
import Category from "./Category";
const MainWrapper = styled.main`
  padding: 1% 3%;
`;

function Main() {
  
  return (
    <MainWrapper>
      <Title text="최신 도서"/>
      <Books query="이" sort="latest" size="5" target="title"/>
      <Category/>
    </MainWrapper>
  );
}

export default Main;
