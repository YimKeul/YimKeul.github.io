import React from "react";
import { Home } from "./";
import { Navigator } from "../components";
import styled from "styled-components";

const PC = window.innerWidth > 1024;

const Main = () => {
  {
    console.log(window.innerWidth);
  }
  return (
    <S.container>
      {PC && <Navigator />}
      <Home />
      <Home />
      <Home />
      <Home />
    </S.container>
  );
};

const S = {
  container: styled.div`
    position: relative;
    width: 1240px;
    margin: 50px auto;
  `,
};

export default Main;
