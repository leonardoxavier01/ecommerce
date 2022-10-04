import styled from "styled-components";

interface IProps {
  color?: string;
  width?: string;
  borderColor?: string;
}

export const ButtonStyled = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  background-color: ${(props) => props.color || "#E9DFF3"};
  width: ${(props) => props.width || "226px"};
  color: #5d2d8c;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${(props) => props.borderColor || "#5D2D8C"};

  :hover {
    filter: brightness(104%);
  }
`;
