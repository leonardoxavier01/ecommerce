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
  width: 50%;
  margin: 25px;
  border-radius: 30px;

  img {
    width: 70%;
    border-radius: 30px;
  }

  @media (max-width: 700px) {
    width: 90%;
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
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
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
  font-size: 15px;
  font-weight: 500;
  color: #181b1c;
`;
