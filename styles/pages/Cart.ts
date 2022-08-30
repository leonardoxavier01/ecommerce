import styled from "styled-components";

export const ContainerCart = styled.div`
  width: 80%;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    width: 95%;
    min-height: 50vh;
  }
`;

export const WrapperCart = styled.div`
  margin: 3rem 0;
  border-radius: 10px;
  min-height: 40rem;
  width: 100%;
  background-color: white;
  box-shadow: -1px 7px 15px -8px rgba(0, 0, 0, 0.64);
  padding: 3rem 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 1rem 3rem;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #2f3841;
    padding: 0 0.2rem;
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
    p{
      margin-top: 0.5rem;
    }
  }
`;
