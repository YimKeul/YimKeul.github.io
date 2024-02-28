import React from "react";
import styled from "styled-components";
import { bgcard } from "../images";
import { point } from "../components";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <S.container id="home">
      <S.inner>
        {/* {isMobile ? (
          <>
            <S.title>
              유연하게
              <br /> 문제를 해결하는 개발자
              <br />
              이세준입니다.
            </S.title>
            <S.desc>
              웹(React), 앱(React-Native, iOS)를 활용해 상황에 맞춰, 유연하게
              대응해 문제를 해결하는 개발자가 되고 싶습니다.
            </S.desc>
          </>
        ) : (
          <>
            <S.title>
              유연하게 문제를 해결하는
              <br /> FrontEnd / Mobile 개발자 <br />
              이세준입니다.
            </S.title>
            <S.desc>
              웹(React), 앱(React-Native, iOS)를 활용해 상황에 맞춰, 유연하게
              대응해 문제를 해결하는 개발자가 되고 싶습니다.
            </S.desc>
          </>
        )} */}

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
          공부하며 iOS, macOS를 개발 중입니다. B2B 클라우드 보안 프로그램 서비스
          회사에 macOS 인턴 근무중입니다.
        </S.desc>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    height: 26rem;
    border-radius: 3.125rem;
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
    margin-block: 2rem;
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
    margin-top: 3rem;
    @media screen and (max-width: 1023px) {
      // margin-top: 1rem;
      line-height: 2rem;
    }
  `,
};

export default Home;
