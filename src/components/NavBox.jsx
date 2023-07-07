import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const PfBox = ({ to, icon, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.LinkContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHovered={isHovered}
    >
      <Link to={to} smooth={true} duration={500} spy={true} offset={-50}>
        <S.navBtn style={{ marginTop: "1rem" }}>
          <S.icon>{icon}</S.icon>
          <S.navTitle>{title}</S.navTitle>
        </S.navBtn>
      </Link>
    </S.LinkContainer>
  );
};

const S = {
  LinkContainer: styled.div`
    ${(props) =>
      props.isHovered &&
      css`
        ${S.navTitle} {
          font-weight: 800;
        }
        transition: all 0.5s ease;
      `}
  `,
  navBtn: styled.div`
    display: flex;
    align-items: center;
  `,
  navTitle: styled.span`
    color: #fff;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 0.94rem;
  `,
  icon: styled.div`
    color: white;
    font-size: 1.5rem;
  `,
};

export default PfBox;
