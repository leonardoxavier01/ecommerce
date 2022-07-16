import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin-top: 10px;
    margin-left: 11px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #181b1c;
    width: 100%;
    text-align: start;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 15px;
  @media (min-width: 300px) {
    grid-template-columns: repeat(1fr);
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
