import React from "react";
import styled from "styled-components";
import { bgcard } from "../images";
import { point } from "../components";

const Home = () => {
  return (
    <S.container>
      <S.inner>
        <S.title>
          <S.point>트렌드</S.point>와 함께 성장하는
          <br /> FrontEnd 개발자 이세준입니다.
        </S.title>
        <S.desc>
          시시각각 변화하는 스킬과 시대를 따라가기 위해 적극적으로 도전하는
          프론트엔드 개발자 이세준입니다. 웹(React), 앱(React-Native),
          iOS(SwiftUI)를 활용해 변화에 유연하게 대응할 수 있는 개발자가 되고
          싶습니다.
        </S.desc>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 54.375rem;
    /* height: 35.56531rem; */
    height: 30rem;
    border-radius: 3.125rem;
    background-image: url(${bgcard});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
    @media screen and (min-width: 1024px) {
      float: right;
    }
  `,
  inner: styled.div`
    margin-block: 4.88rem;
    padding-inline: 3.88rem;
  `,
  title: styled.div`
    color: white;
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `,
  point: styled.span`
    color: ${() => point};
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `,
  desc: styled.div`
    color: #fff;
    font-size: 1.2rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    margin-top: 5rem;
  `,
};

export default Home;
