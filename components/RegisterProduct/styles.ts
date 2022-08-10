import styled from "styled-components";

export const FormRegisterProduct = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 27rem;
  padding: 1rem 1.8rem;
  margin-bottom: 1rem;
  box-shadow: -1px 7px 15px -15px rgba(0, 0, 0, 0.64);
  border-radius: 1rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #181b1c;
  }

  div {
    width: 100%;
  }

  label {
    width: 100%;
    text-align: start;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #181b1c;
    margin-bottom: 0;
  }

  textarea {
    width: 100%;
    background-color: aqua;
    box-shadow: -5px 5px 15px -10px rgba(0, 0, 0, 0.64);
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    border-radius: 1rem;
    padding: 0.5rem;
    min-height: 5rem;
    &:nth-of-type(2) {
      margin-bottom: 1rem;
    }
  }
`;
