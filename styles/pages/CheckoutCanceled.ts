import styled from "styled-components";

export const ContainerCanceled = styled.div`
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

export const WrapperCanceled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 40rem;
  height: 20rem;
  border-radius: 10px;
  background-color: white;

  padding: 1rem;
  h1 {
    margin-top: 0.4rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: #ee2323;
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

export const ContainerButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  p {
    font-size: 0.9rem;
    font-weight: 400;
    color: #2f3841;
    margin: 0.5rem;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    width: 100%;
  }
`;
