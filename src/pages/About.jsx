import React, { useState } from "react";
import styled from "styled-components";
import { point, main, purple, SkillBox, SkillSet } from "../components";
import { profile } from "../images";
import {
  MdPerson,
  MdOutlineDateRange,
  MdEmail,
  MdLink,
  MdPlayArrow,
} from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const [isMore, setMore] = useState(false);
  const handleMore = () => {
    setMore(!isMore);
  };
  return (
    <S.container>
      <S.inner>
        <S.section>
          About Me
          <S.bar />
        </S.section>
        <S.row>
          <S.imgBox>
            <img src={profile} alt="profile" />
          </S.imgBox>
          <S.content>
            <S.title>안녕하세요 👋🏻</S.title>
            <S.desc>
              새로운 트렌드와 기술을 주시하며 학습하고, 현실적인 문제에 창의적인
              솔루션을 제공하기 위해 노력하는 개발자 이세준입니다.
              <br /> 다양한 도구와 기술을 습득하고 활용함으로써 변화하는 시장과
              요구 사항에 유연하게 대응할 수 있는 개발자로 성장하고자 합니다.
            </S.desc>
            {isMore ? (
              <>
                <S.infoLabel
                  onClick={() => handleMore()}
                  style={{ cursor: "pointer" }}
                >
                  <MdPlayArrow
                    style={{
                      width: "1.25rem",
                      height: "1.25rem",
                      transform: "rotate(90deg)",
                    }}
                    color={purple}
                  />
                  <S.moreText>더보기</S.moreText>
                </S.infoLabel>
                <br />
                <SkillSet />
              </>
            ) : (
              <S.infoLabel
                onClick={() => handleMore()}
                style={{ cursor: "pointer" }}
              >
                <MdPlayArrow
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                  }}
                  color={purple}
                />
                <S.moreText>더보기</S.moreText>
              </S.infoLabel>
            )}
            <S.line />
            <S.infoBox>
              <S.row>
                <S.infoArea1>
                  <S.infoLabel>
                    <MdPerson style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>이세준</S.infoText>
                    <S.infoText>Lee SeJun</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdOutlineDateRange
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    <S.infoText>1999.02.10</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdEmail style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>leesjun29@gmail.com</S.infoText>
                  </S.infoLabel>
                </S.infoArea1>
                <S.infoArea2>
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>github</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>velog</S.infoText>
                  </S.infoLabel>
                  {/*  */}
                  <S.infoLabel>
                    <MdLink style={{ width: "1rem", height: "1rem" }} />
                    <S.infoText>linkednIn</S.infoText>
                  </S.infoLabel>
                </S.infoArea2>
              </S.row>
            </S.infoBox>
          </S.content>
        </S.row>
      </S.inner>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    min-height: 30rem;
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
    margin-bottom: 5rem;
    float: right;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
      width: 100%;
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
  section: styled.div`
    color: #000;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  bar: styled.div`
    width: 1.5rem;
    height: 0.25rem;
    background-color: ${() => point};
    border-radius: 1.25rem;
  `,
  row: styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 1023px) {
      flex-direction: column;
    }
  `,
  imgBox: styled.div`
    margin-top: 2.87rem;
    margin-right: 2.87rem;
    @media screen and (max-width: 1023px) {
      margin-right: 0;
      align-self: center;
    }
  `,
  content: styled.div`
    width: 30.75rem;
    margin-top: 2.87rem;
    @media screen and (max-width: 1023px) {
      width: 100%;
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
  desc: styled.div`
    width: 30.75rem;
    color: black;
    font-size: 1.2rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: 2.5rem;
    margin-block: 1.5rem;
    @media screen and (max-width: 1023px) {
      width: auto;
      margin-top: 0.5rem;
      font-weight: 500;
      line-height: 2rem;
    }
  `,
  line: styled.div`
    width: 100%;
    height: 0.125rem;
    background: #cdcdcd;
    margin-top: 1.13rem;
  `,
  infoBox: styled.div`
    margin-top: 2.13rem;
  `,
  infoLabel: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  `,
  infoText: styled.span`
    color: #000;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.94rem;
  `,
  infoArea1: styled.div`
    flex: 2;
    @media screen and (max-width: 1023px) {
      flex: 1;
    }
  `,
  infoArea2: styled.div`
    flex: 1;
  `,
  moreText: styled.span`
    background: ${() => main};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 1.25rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.5rem;
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

export default About;
