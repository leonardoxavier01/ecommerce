import styled from "styled-components";

interface IProps {
  color?: string;
  width?: string;
  hoverColor?: string;
}

export const ButtonStyled = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  background-color: ${(props) => props.color || "#5d2d8c"};
  width: ${(props) => props.width || "226px"};
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  border: none;

  :hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
