import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: 700px) {
    flex-direction:column;
  }
`;

export const BoxImage = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11rem;
  height: 11rem;
  margin-bottom: 10px;
  img {
    max-width: 11rem;
    max-height: 11rem;
  }
`;

export const ProductDetails = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  p {
    font-size: 1.3rem;
    font-weight: 600;
    color: #36393b;
  }

  @media (max-width: 700px) {
    padding: 1rem 0;
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const WrapperTextButtons = styled.div`
  display: flex;
  max-width: 21rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const PriceProduct = styled.span`
  margin: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f1111;
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
`;

export const BoxButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 7rem;
  span {
    font-size: 1.3rem;
    font-weight: 500;
    color: #0f1111;
  }
  button {
    text-align: center;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
    background-color: #d9d9d9;
    border: none;
  }
`;
