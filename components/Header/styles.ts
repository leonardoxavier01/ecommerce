import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d2d8c;
  width: 100%;
  min-height: 90px;
  @media (max-width: 900px) {
    min-height: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1109px;
  height: 100%;
`;

export const BoxImage = styled.div`
  width: 190px;
  cursor: pointer;
  @media (min-width: 300px) {
    margin-left: 15px;
    width: 110px;
  }
  @media (min-width: 600px) {
    width: 140px;
  }
  @media (min-width: 900px) {
    margin-left: 0;
  }
`;
