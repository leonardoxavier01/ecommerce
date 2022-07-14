import styled from "styled-components";

interface IProps {
  color?: string;
}

export const ButtonStyled = styled.button<IProps>`
  width: 226px;
  height: 43px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  background-color: ${(props) => props.color || "#5d2d8c"};
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  font-family: "Poppins", sans-serif;
`;
