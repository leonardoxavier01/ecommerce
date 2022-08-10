import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #181b1c;
  }

  label {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #181b1c;
    margin: 0;
  }

  textarea {
    background-color: white;
    border-radius: 1rem;
    width: 100%;
    padding: 0.5rem;
    min-height: 5rem;
    box-shadow: -5px 5px 15px -10px rgba(0, 0, 0, 0.64);
    border: 1px solid rgba(0, 0, 0, 0.2);
    outline: none;

    &:nth-of-type(2) {
      margin-bottom: 1rem;
    }
  }
`;
