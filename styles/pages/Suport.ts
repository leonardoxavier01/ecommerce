import styled from "styled-components";

export const SectionHeading = styled.section`
  background-color: #5d2d8c;
  width: 100%;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;

  h1 {
    font-size: 2.5rem;
    color: white;
    font-weight: 500;
  }

  @media (max-width: 400px) {
    height: 15rem;

    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const SectionChannels = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
