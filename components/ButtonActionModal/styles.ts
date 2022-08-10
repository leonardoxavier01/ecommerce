import styled from "styled-components";

interface IButtonStyledProps {
  backgroundColor: string;
  colorFont?: string;
}

export const ButtonStyled = styled.button<IButtonStyledProps>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => (props.colorFont ? props.colorFont : "black")};
  min-width: 7.1rem;
  height: 1.4rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 500;
  border: 1px solid gray;
`;
