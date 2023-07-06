import React from "react";
import styled from "styled-components";
import { SiIos } from "react-icons/si";
import { gray, SkillBox } from "./";

const PfBox = () => {
  return (
    <S.container>
      <SiIos size={"1.5rem"} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 220px;
    height: 160px;
    padding-top: 1.5rem;
    border: 1px solid #e9ebee;
    border-radius: 1rem;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      /* width: 10rem; */
    }
    @media screen and (max-width: 767px) {
    }
  `,
  title: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  row: styled.div`
    display: flex;
    flex: 1;
  `,
  row2: styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  cerBox: styled.div`
    color: #000;
    font-size: 0.9375rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 1.8rem;
    white-space: pre-line;
  `,
};

export default PfBox;
