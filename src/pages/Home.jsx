import React from "react";
import styled from "styled-components";
import { bgcard } from "../images";
import { point } from "../components";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <S.container>
      <S.inner>
        {isMobile ? (
          <>
            <S.title>
              {/* <S.point>트렌드</S.point>에 맞춰 */}
              트렌드에 맞춰
              <br /> 함께 성장하는
              <br />
              이세준입니다.
            </S.title>
            <S.desc>
              시시각각 변화하는 스킬과 시대를 따라가기 위해 적극적으로 도전하는
              프론트엔드 개발자 이세준입니다. 웹(React), 앱(React-Native),
              iOS(SwiftUI)를 활용해 변화에 유연하게 대응할 수 있는 개발자가 되고
              싶습니다.
            </S.desc>
          </>
        ) : (
          <>
            <S.title>
              {/* <S.point>트렌드</S.point>에 맞춰 함께 성장하는 */}
              트렌드에 맞춰 함께 성장하는
              <br /> FrontEnd 개발자 이세준입니다.
            </S.title>
            <S.desc>
              시시각각 변화하는 스킬과 시대를 따라가기 위해 적극적으로 도전하는
              프론트엔드 개발자 이세준입니다. 웹(React), 앱(React-Native),
              iOS(SwiftUI)를 활용해 변화에 유연하게 대응할 수 있는 개발자가 되고
              싶습니다.
            </S.desc>
          </>
        )}
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    height: 30rem;
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
    margin-top: 5rem;
    @media screen and (max-width: 1023px) {
      margin-top: 2rem;
      line-height: 2rem;
    }
  `,
};

export default Home;
