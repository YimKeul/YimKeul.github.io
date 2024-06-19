import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { SkillBox } from "./";

const SkillSet = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if (isMobile) {
    return (
      <>
        <S.title>개발 직무</S.title>
        <S.row2>
          <S.row>
            <SkillBox text={"iOS 개발자"} />
            <SkillBox text={"macOS 개발자"} />
            <SkillBox text={"Web 개발자"} />
          </S.row>
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>기술 스택</S.title>
        <S.row>
          <S.row2>
            <SkillBox text={"Swift"} />
            <SkillBox text={"SwiftUI"} />
            <SkillBox text={"React"} />
            <SkillBox text={"React-Native"} />
            <SkillBox text={"JavaScript"} />
            <SkillBox text={"TypeScript"} />
          </S.row2>
          <S.row2>
            <SkillBox text={"Python"} />
            <SkillBox text={"SQL"} />
            <SkillBox text={"Git"} />
            <SkillBox text={"Figma"} />
            <SkillBox text={"Notion"} />
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
          <SkillBox text={"iOS 개발자"} />
          <SkillBox text={"macOS 개발자"} />
          <SkillBox text={"Web 개발자"} />
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>기술 스택</S.title>
        <S.row2>
          <SkillBox text={"Swift"} />
          <SkillBox text={"SwiftUI"} />
          <SkillBox text={"React"} />
          <SkillBox text={"React-Native"} />
        </S.row2>
        <S.row2>
          <SkillBox text={"JavaScript"} />
          <SkillBox text={"TypeScript"} />
          <SkillBox text={"Python"} />
          <SkillBox text={"SQL"} />
        </S.row2>
        <S.row2>
          <SkillBox text={"Git"} />
          <SkillBox text={"Figma"} />
          <SkillBox text={"Notion"} />
          <SkillBox text={"Slack"} />
        </S.row2>
        <S.title style={{ marginTop: "0.6rem" }}>자격증</S.title>
        <S.cerBox>
          {`정보처리기사
          SQLD
                  한국사능력검정 2급
                  컴퓨터활용능력 1급
                  정보처리기능사
                  `}
        </S.cerBox>
      </>
    );
  }
};

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
