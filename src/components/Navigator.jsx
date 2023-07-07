import React from "react";
import styled from "styled-components";
import { main, glass, NavBox } from "./";
import { rsicons } from "../images";
import { MdHome, MdPerson, MdOutlineStar, MdMonitor } from "react-icons/md";

const Navigator = () => {
  return (
    <>
      <S.container>
        <S.inner>
          <S.name>Se Jun</S.name>
          <br />
          <S.position>Front End / Mobile Developer</S.position>
          <div style={{ marginTop: "2.12rem" }} />
          <NavBox to={"home"} icon={<MdHome />} title={"Home"} />
          <NavBox to={"about"} icon={<MdPerson />} title={"About"} />
          <NavBox
            to={"experience"}
            icon={<MdOutlineStar />}
            title={"Experience"}
          />
          <NavBox to={"portfolio"} icon={<MdMonitor />} title={"Portfolio"} />
        </S.inner>

        <S.glass>
          <S.outer>
            <img src={rsicons} alt="logo" />
          </S.outer>
        </S.glass>
      </S.container>
    </>
  );
};

const S = {
  container: styled.div`
    background: ${() => main};
    border-radius: 3.125rem 3.125rem 0 0;
    width: 18.25rem;
    height: 22.375rem;
    position: fixed;
  `,

  glass: styled.div`
    margin-top: 3rem;
    width: 18.25rem;
    height: 4.125rem;
    border-radius: 0 0 3.125rem 3.125rem;
    background: ${() => glass};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
  `,
  inner: styled.div`
    padding-top: 2.13rem;
    margin-left: 1.87rem;
  `,
  name: styled.span`
    color: #fff;
    font-size: 3.125rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  `,
  position: styled.span`
    color: #fff;
    font-size: 0.9375rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 3.13rem;
  `,

  outer: styled.div`
    margin-top: -1.2rem;
    padding-inline: 1.2rem;
    float: right;
  `,
};

export default Navigator;
