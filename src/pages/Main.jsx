import React from "react";
import { Home, About } from "./";
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
      <About />
      <About />
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
