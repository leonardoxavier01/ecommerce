import styled from "styled-components";

export const ContentCategory = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1230px) {
    flex-direction: column-reverse;
  }
`;

export const TitleProductsPage = styled.h1`
  width: 100%;
  margin-top: 1rem;
  text-align: start;
  font-size: 1.3rem;
  font-weight: 600;
  color: #181b1c;
  padding: 0 0.2rem;
`;
