import React from "react";
import styled from "styled-components";
import { bgcard } from "../images";
import { point } from "../components";
// import { useMediaQuery } from "react-responsive";

const Home = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <S.container id="home">
      <S.inner>
        <S.title>
          유연하게
          <br /> 문제를 해결하는 개발자
          <br />
          이세준입니다.
        </S.title>
        <S.desc>
          iOS, macOS Developer & Front-End
          <br />
          Front-End 에 흥미를 가지고 개발에 입문했습니다. 지금은 Swift를
          공부하며 iOS, macOS Application 개발하고 있습니다.
        </S.desc>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    // min-height: 20rem;
    border-radius: 3.125rem;
    // background: #000000;
    background-image: url(${bgcard});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
    float: right;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
      height: auto;
      float: none;
    }
    @media screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      float: none;
    }
  `,
  inner: styled.div`
    margin-block: 3.25rem;
    padding-inline: 3.88rem;
    @media screen and (max-width: 1023px) {
      margin: 0;
      padding-block: 3rem;
      padding-inline: 2rem;
    }
  `,
  title: styled.div`
    color: white;
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media screen and (max-width: 1023px) {
      line-height: 3.8rem;
      font-size: 2.5rem;
    }
  `,
  point: styled.span`
    color: ${() => point};
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    @media screen and (max-width: 1023px) {
      line-height: 3.8rem;
      font-size: 2.5rem;
    }
  `,
  desc: styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    margin-top: 2rem;
    @media screen and (max-width: 1023px) {
      margin-top: 2rem;
      line-height: 2rem;
    }
  `,
};

export default Home;
