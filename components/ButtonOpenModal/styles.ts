import styled from "styled-components";

interface IButtonStyled {
  backgroundColor: string;
  colorFont?: string;
}

export const ButtonStyled = styled.button<IButtonStyled>`
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid gray;
  color: ${(props) => (props.colorFont ? props.colorFont : "black")};
  min-width: 8rem;
  height: 1.4rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 500;
`;
