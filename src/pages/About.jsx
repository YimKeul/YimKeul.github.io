import React from "react";
import styled from "styled-components";

// const PC = window.innerWidth > 1024;

const About = () => {
  return <S.container>{/* <p>h</p> */}</S.container>;
};

const S = {
  container: styled.div`
    width: 54.375rem;
    height: 35.56531rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
    margin-bottom: 5rem;
    @media screen and (min-width: 1024px) {
      float: right;
    }
  `,
};

export default About;
