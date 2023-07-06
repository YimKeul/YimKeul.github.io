import React from "react";
import styled from "styled-components";
import { gray } from "./";

const SkillBox = ({ text }) => {
  return <S.container>{text}</S.container>;
};

const S = {
  container: styled.div`
    border-radius: 2rem;
    border: 2px solid ${() => gray};
    background: #fff;
    padding-block: 0.5rem;
    padding-inline: 1.2rem;
    color: #000;
    font-size: 0.9375rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-block: 0.6rem;
    margin-right: 0.6rem;
    text-align: center;
    @media screen and (max-width: 767px) {
      padding-block: 0.5rem;
      width: fit-content;
    }
  `,
};

export default SkillBox;
