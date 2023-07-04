import React from "react";
import { Navigator } from "../components";
import styled from "styled-components";

const Main = () => {
  return (
    <S.container>
      <Navigator />
      <h2>ggg</h2>
    </S.container>
  );
};

const S = {
  container: styled.div`
    margin: 50px auto;
  `,
};

export default Main;
