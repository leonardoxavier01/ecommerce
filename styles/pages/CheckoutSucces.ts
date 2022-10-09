import styled from "styled-components";

export const ContainerSucces = styled.div`
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: ${(props) => props.color};
  @media (max-width: 900px) {
    padding-top: 50px;
  }
`;

export const BuyConfirmed = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 30rem;
  height: 20rem;
  border-radius: 10px;

  h1 {
    margin-top: 0.4rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: #2f3841;
  }

  h2 {
    margin-top: 0.2rem;
    font-size: 1rem;
    font-weight: 400;
    color: #2f3841;
  }

  @media (max-width: 400px) {
    width: 20rem;
    height: 15rem;

    h1 {
      font-size: 1rem;
    }

    h2 {
      font-size: 0.9rem;
    }
  }
`;
