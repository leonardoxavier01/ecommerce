import styled from "styled-components";

export const ContainerChannel = styled.div`
  background-color: white;
  padding: 1rem;
  height: 11rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1080px) {
    min-width: 21.052rem;
    height: 11rem;
  }

  @media (max-width: 600px) {
    height: 12rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #15191e;
    font-weight: 500;
  }

  p {
    font-size: 1.125rem;
    color: #15191e;
  }

  a {
    font-size: 1.125rem;
    color: #5d2d8c;
    font-weight: 600;
    cursor: pointer;
  }
`;
