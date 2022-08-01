import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22rem;
  height: 2.7rem;
  margin: 0.6rem 0;
  box-shadow: -5px 5px 15px -10px rgba(0, 0, 0, 0.64);
  border: 1px solid rgba(0, 0, 0, 0.2);
  input {
    width: 90%;
    height: 2rem;
    background: transparent;
    border: transparent;
    outline: none;
    font-size: 15px;
  }
`;
