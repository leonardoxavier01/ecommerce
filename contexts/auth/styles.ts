import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
`;

export const StyledForm = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 25rem;
  height: 27rem;
  box-shadow: -1px 7px 15px 1px rgba(0, 0, 0, 0.64);
  h1 {
    color: #282d2e;
    font-size: 30px;
    margin-bottom: 1rem;
  }
  button {
    background-color: #5d2d8c;
    border-radius: 0.4rem;
    margin-top: 2rem;
    width: 22rem;
    height: 2.7rem;
    box-shadow: -1px 7px 15px -6px rgba(0, 0, 0, 0.64);
    cursor: pointer;
    border: transparent;
    color: white;
  }
`;
