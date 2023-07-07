import React, { useState } from "react";
import styled, { css } from "styled-components";
import { point, gray } from "./";
import { Link } from "react-scroll";

const PfBox = ({ to, icon, title, desc }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <S.container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ishovered={isHovered.toString()}
    >
      <Link to={to} smooth={true} duration={500} spy={true} offset={-50}>
        <S.icon>{icon}</S.icon>
        <S.title>{title}</S.title>
        <S.desc>{desc}</S.desc>
      </Link>
    </S.container>
  );
};

const S = {
  container: styled.div`
    width: 13.75rem;
    height: 10rem;
    padding-top: 1.5rem;
    border: 1px solid #e9ebee;
    border-radius: 1rem;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1023px) {
    }
    @media screen and (max-width: 767px) {
      margin-bottom: 2rem;
    }

    ${(props) =>
      props.ishovered === "true" &&
      css`
        background-color: ${() => point};

        ${S.icon} {
          color: white;
        }
        ${S.title} {
          color: white;
        }
        ${S.desc} {
          color: white;
        }
        transition: all 0.5s ease;
      `}
  `,
  row: styled.div`
    display: flex;
    flex: 1;
  `,

  icon: styled.div`
    color: ${() => point};
    font-size: 1.5rem;
  `,
  title: styled.h4`
    margin-bottom: 0;
  `,
  desc: styled.p`
    font-size: 0.875rem;
    color: ${() => gray};
  `,
};

export default PfBox;
