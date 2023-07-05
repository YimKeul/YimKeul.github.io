import React from "react";
import { Home, About, Experience, Portfoilo } from "./";
import { Navigator } from "../components";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Main = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <S.container>
      {isDesktop && <Navigator />}
      <Home />
      <About />
      <Experience />
      <Portfoilo />
    </S.container>
  );
};

const S = {
  container: styled.div`
    position: relative;
    width: 1170px;
    margin: 50px auto;
    @media screen and (max-width: 767px) {
      width: 90%;
    }
  `,
};

export default Main;
