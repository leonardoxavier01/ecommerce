import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 43rem;

  @media (max-width: 1230px) {
    width: 100%;
  }
`;

export const ProductDetails = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 1rem;
  background-color: white;
  width: 100%;
  min-height: 14rem;
  padding: 0.2rem 2.5rem;
  box-shadow: -1px 7px 15px -15px rgba(0, 0, 0, 0.64);
  border-radius: 1rem;

  details {
    padding: 1rem 0;
  }

  summary {
    text-align: end;
    cursor: pointer;
  }
`;

export const WrapperDetails = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #181b1c;
  }

  span {
    font-size: 0.8rem;
    color: #181b1c;
    margin-bottom: 0.6rem;
  }
`;

export const BoxUploadLink = styled.div`
  display: flex;
  align-items: flex-start;

  width: 12rem;
  justify-content: space-between;
  a {
    color: #181b1c;
    font-size: 14px;
    text-decoration: underline;
  }
`;
