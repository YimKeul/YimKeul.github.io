import React from "react";
import styled from "styled-components";
import { point, main, purple } from "../components";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return (
    <S.container>
      <S.inner>
        <S.section>
          Experience
          <S.bar />
        </S.section>
        <S.tlBox>
          <S.tlItem>
            <div style={{ marginRight: "10rem" }}>
              <span>2020</span>
              <S.tlBarFillCircle />
              <S.tlBarEmptyCircle />
            </div>

            <div>
              <span>title</span>
              <p>12312</p>
            </div>
          </S.tlItem>

          <S.tlBar />
        </S.tlBox>
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
    @media screen and (max-width: 767px) {
      width: 100%;
      height: auto;
      float: none;
    }
  `,
  inner: styled.div`
    margin-block: 3.25rem;
    padding-inline: 3.88rem;

    @media screen and (max-width: 767px) {
      margin: 0;
      padding-block: 3rem;
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
  tlBar: styled.span`
    position: absolute;
    width: 1px;
    border-right: 2px solid ${() => point};
    top: 0;
    bottom: 0;
    left: 9.4rem;
  `,
  tlBarEmptyCircle: styled.span`
    width: 14px;
    height: 14px;
    background-color: #fff;
    border: 1px solid ${() => point};
    border-radius: 50%;
    position: absolute;
    /* top: 1rem; */
    left: 9rem;
    right: 0;
    z-index: 1;
  `,

  tlBarFillCircle: styled.span`
    width: 8px;
    height: 8px;
    background-color: ${() => point};
    border: 1px solid ${() => point};
    border-radius: 50%;
    position: absolute;
    top: 0.2rem;
    left: 9.18rem;
    z-index: 2;
  `,

  tlBox: styled.div`
    position: relative;
    margin-top: 2rem;
  `,
  tlItem: styled.div`
    display: flex;
    margin-bottom: 5rem;
    position: relative;
  `,
};

export default Experience;
