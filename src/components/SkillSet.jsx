import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { gray, SkillBox } from "./";

const SkillSet = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if (isMobile) {
    return (
      <>
        <S.title>개발 직무</S.title>
        <S.row2>
          <S.row>
            <SkillBox text={"WEB 개발자"} />
            <SkillBox text={"IOS 개발자"} />
          </S.row>

          <SkillBox text={"크로스플랫폼 앱개발자"} />
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>기술 스택</S.title>
        <S.row>
          <S.row2>
            <SkillBox text={"JavaScript"} />
            <SkillBox text={"TypeScript"} />
            <SkillBox text={"Python"} />
            <SkillBox text={"Java"} />
            <SkillBox text={"Swift"} />
            <SkillBox text={"Figma"} />
            <SkillBox text={"Notion"} />
          </S.row2>
          <S.row2>
            <SkillBox text={"React"} />
            <SkillBox text={"React-Native"} />
            <SkillBox text={"SwiftUI"} />
            <SkillBox text={"Oracle"} />
            <SkillBox text={"Git"} />

            <SkillBox text={"Slack"} />
          </S.row2>
        </S.row>

        <S.title style={{ marginTop: "0.6rem" }}>자격증</S.title>
        <S.cerBox>
          {`SQLD
                  한국사능력검정 2급
                  컴퓨터활용능력 1급
                  정보처리기능사
                  `}
        </S.cerBox>
      </>
    );
  } else {
    return (
      <>
        <S.title>개발 직무</S.title>
        <S.row2>
          <SkillBox text={"WEB 개발자"} />
          <SkillBox text={"IOS 개발자"} />
          <SkillBox text={"크로스플랫폼 앱개발자"} />
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>기술 스택</S.title>
        <S.row2>
          <SkillBox text={"JavaScript"} />
          <SkillBox text={"TypeScript"} />
          <SkillBox text={"Python"} />
          <SkillBox text={"Java"} />
          <SkillBox text={"Swift"} />
        </S.row2>
        <S.row2>
          <SkillBox text={"React"} />
          <SkillBox text={"React-Native"} />
          <SkillBox text={"SwiftUI"} />
          <SkillBox text={"Oracle"} />
          <SkillBox text={"Git"} />
        </S.row2>
        <S.row2>
          <SkillBox text={"Figma"} />
          <SkillBox text={"Notion"} />
          <SkillBox text={"Slack"} />
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>자격증</S.title>
        <S.cerBox>
          {`SQLD
                  한국사능력검정 2급
                  컴퓨터활용능력 1급
                  정보처리기능사
                  `}
        </S.cerBox>
      </>
    );
  }
};

{
}

const S = {
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

export default SkillSet;
