import React from "react";
import styled from "styled-components";
import { main } from "./Colors";
import { MdHome, MdPerson, MdOutlineStar, MdMonitor } from "react-icons/md";

const NavBtn = ({ icon, title }) => {
  return (
    <S.container>
      <icon style={{ width: "1rem", height: "1rem" }} color={white} />
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export default NavBtn;
