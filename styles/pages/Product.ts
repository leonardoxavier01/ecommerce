import styled from "styled-components";

export const WrapperProduct = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const BoxImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 35rem;
  height: 30rem;
  margin: 25px;
  border-radius: 10px;
  padding: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 30px;
  }

  @media (max-width: 700px) {
    width: 90%;
    height: 20rem;
  }
`;

export const Details = styled.div`
  width: 32.625rem;
  max-height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 10px;
  overflow: hidden;

  button {
    margin-top: 10px;
  }

  h1 {
    overflow: hidden;
    font-weight: 700;
    font-size: 35px;
    color: #181b1c;
    width: 100%;
    text-align: start;
    border-bottom: 4px solid rgb(93, 45, 140, 0.2);
    overflow: hidden;
    @media (max-width: 400px) {
      font-size: 25px;
    }
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }

  @media (max-width: 700px) {
    padding: 0 15px;
  }
`;

export const Description = styled.p`
  width: 100%;
  margin-top: 35px;
  padding: 5px 20px;
  text-align: start;
  font-size: 19px;
  font-weight: 500;
  color: #181b1c;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    button {
      width: 80%;
    }
  }

  @media (min-width: 600px) {
    width: 100%;
  }

  @media (min-width: 1150px) {
    width: 90%;
  }
`;
