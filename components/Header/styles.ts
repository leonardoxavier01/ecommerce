import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5d2d8c;
  border-bottom: 2px solid #212121;
  width: 100%;
  min-height: 70px;
  @media (max-width: 900px) {
    min-height: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
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

export const IconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 300px) {
    margin-left: 15px;
    width: 110px;
    height: 60px;
  }
  @media (min-width: 600px) {
    width: 140px;
  }
  @media (min-width: 900px) {
    margin-left: 0;
    width: 60px;
  }
`;
