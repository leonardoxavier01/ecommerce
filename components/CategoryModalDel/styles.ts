import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color};
  color: white;
  min-width: 7.1rem;
  height: 1.4rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 500;
`;
