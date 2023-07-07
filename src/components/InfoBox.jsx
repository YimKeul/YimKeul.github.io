import React from "react";
import styled from "styled-components";

const InfoBox = ({ icon, desc }) => {
  return (
    <S.infoLabel>
      <S.icon>{icon}</S.icon>
      <S.infoText>{desc}</S.infoText>
    </S.infoLabel>
  );
};

const S = {
  infoLabel: styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;
  `,
  infoText: styled.div`
    color: #000;
    font-size: 1rem;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 0.94rem;
  `,
  icon: styled.div`
    font-size: 1rem;
  `,
};

export default InfoBox;
