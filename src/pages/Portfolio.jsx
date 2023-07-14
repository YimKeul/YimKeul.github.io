import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdSmartphone, MdOutlineWebAsset } from "react-icons/md";
import { SiIos } from "react-icons/si";
import { point, PfBox } from "../components";
import { PortfolioWeb, PortfolioMobile, PortfolioIos } from ".";
const Portfoilo = () => {
  const [isFocus, setIsFocus] = useState("");
  useEffect(() => {
    setIsFocus("");
  }, []);

  return (
    <S.container id="portfolio">
      <S.inner>
        <S.section>
          Portfolio
          <S.bar />
        </S.section>
        {/*  */}
        <S.content>
          <S.row>
            <PfBox
              to={"web"}
              icon={<MdOutlineWebAsset />}
              title={"Web"}
              desc={"React"}
              id={"web"}
              setIsFocus={setIsFocus}
            />
            <PfBox
              icon={<MdSmartphone />}
              title={"Mobile"}
              desc={"React-Naitve/Flutter"}
              id={"mobile"}
              setIsFocus={setIsFocus}
            />
            <PfBox
              icon={<SiIos />}
              title={"iOS"}
              desc={"SwfitUI"}
              id={"ios"}
              setIsFocus={setIsFocus}
            />
          </S.row>
        </S.content>
      </S.inner>
      {isFocus === "web" && <PortfolioWeb />}
      {isFocus === "mobile" && <PortfolioMobile />}
      {isFocus === "ios" && <PortfolioIos />}
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 52rem;
    /* min-height: 30rem; */
    border-radius: 3.125rem;
    background: #fff;
    box-shadow: 0px 0px 30px 0px rgba(161, 117, 255, 0.3);
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
  content: styled.div`
    margin-top: 2.87rem;
    @media screen and (max-width: 1023px) {
      width: 100%;
    }
  `,
  row: styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  `,
};

export default Portfoilo;
