import styled from "styled-components";

export const ContainerCart = styled.div`
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

interface IWrapperProps {
  height?: number;
}

export const WrapperCart = styled.div<IWrapperProps>`
  margin: 2rem 0;
  border-radius: 10px;
  min-height: ${(props) => props.height || 22}rem;
  width: 100%;
  background-color: white;
  box-shadow: -1px 7px 15px -8px rgba(0, 0, 0, 0.5);
  padding: 3rem 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2f3841;
    padding: 0 0.2rem;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 600;
    color: #2f3841;
  }

  p {
    cursor: pointer;
    text-decoration: underline;
    font-size: 1rem;
    font-weight: 600;
    color: #e44c4c;
    padding: 0 0.2rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    p {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 1.2rem;
      padding: 0;
    }

    h2 {
      font-size: 1.2rem;
      padding: 0 0.5rem;
    }
  }
`;

export const InitiateCheckout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;

  p {
    font-size: 1.2rem;
    color: #2f3841;
    font-weight: 500;

    span {
      font-weight: 600;
      color: #2f3841;
    }
  }

  button {
    margin-left: 1rem;
  }

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;

    p {
      margin-top: 0.5rem;
    }

    button {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
