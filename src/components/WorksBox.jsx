import React from "react";
import styled from "styled-components";
import { Loading, github, web, apple } from "../images";

const WorksBox = ({ img, Title, SubTitle, Desc1, Desc2, isDeploy, link }) => {
  return (
    <>
      <S.row>
        <S.content
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <S.img
            src={img}
            alt="img"
            onError={(e) => {
              e.target.src = Loading;
            }}
          />
        </S.content>
        <S.content2>
          <S.title>{Title}</S.title>
          <S.desc>{SubTitle}</S.desc>
          <S.row>
            <S.desc2>설명</S.desc2>
            <S.desc2>{Desc1}</S.desc2>
          </S.row>
          <S.row>
            <S.desc2>사용 기술</S.desc2>
            <S.desc2>{Desc2}</S.desc2>
          </S.row>
          {/* {isDeploy === "none" ? (
            <div></div>
          ) : isDeploy === "github" ? (
            <a href={link} target="_blank" rel="noreferrer noopener">
              <S.baner src={github} alt="img" />
            </a>
          ) : isDeploy === "web" ? (
            <a href={link} target="_blank" rel="noreferrer noopener">
              <S.baner src={web} alt="img" />
            </a>
          ) : isDeploy === "apple" ? (
            <a href={link} target="_blank" rel="noreferrer noopener">
              <S.baner src={apple} alt="img" />
            </a>
          ) : null} */}

          {isDeploy &&
            isDeploy.length > 0 &&
            isDeploy.map((deployType, index) => {
              if (deployType === "github") {
                return (
                  <a
                    key={index}
                    href={link[index]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <S.baner src={github} alt="github" />
                  </a>
                );
              } else if (deployType === "web") {
                return (
                  <a
                    key={index}
                    href={link[index]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <S.baner src={web} alt="web" />
                  </a>
                );
              } else if (deployType === "apple") {
                return (
                  <a
                    key={index}
                    href={link[index]}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <S.baner src={apple} alt="apple" />
                  </a>
                );
              } else {
                return null;
              }
            })}
        </S.content2>
      </S.row>
      <S.line />
    </>
  );
};

const S = {
  row: styled.div`
    display: flex;
    flex: 1;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
  content: styled.div`
    margin-top: 2.87rem;

    flex: 1;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  `,
  content2: styled.div`
    flex: 1;
    margin-block: auto;
    margin-left: 3rem;

    @media screen and (max-width: 1023px) {
      width: 100%;
      margin: 2.87rem auto;
    }
  `,
  img: styled.img`
    width: 100%;
    /* height: 100%; */
    object-fit: contain;
  `,
  baner: styled.img`
    width: 119.66;
    height: 40;
    object-fit: contain;
  `,
  line: styled.div`
    width: 100%;
    height: 0.125rem;
    background: #cdcdcd;
    margin-top: 1.13rem;
  `,

  title: styled.span`
    color: #000;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  desc: styled.div`
    color: #848484;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-top: 0.5rem;
    white-space: pre-line;
    margin-block: 0.6rem;
  `,
  desc2: styled.div`
    min-width: fit-content;
    color: black;
    font-family: Inter;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.5rem;
    margin-right: 1rem;
    white-space: pre-line;
    margin-block: 0.6rem;
    word-wrap: break-word; // 텍스트가 너무 길 때 줄바꿈
    word-break: break-word; // 단어가 너무 길 때 줄바꿈
  `,
  a: styled.a`
    text-decoration: none;
  `,
};

export default WorksBox;
