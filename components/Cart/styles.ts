import styled from "styled-components";

export const StyledIconCart = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const IconStyled = styled.div`
  background-color: transparent;
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #212120;
    font-size: 18px;
    color: white;
    position: absolute;
    right: 0;
    bottom: 60%;
    left: 60%;
  }
`;
