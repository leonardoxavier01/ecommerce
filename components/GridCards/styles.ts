import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  h1 {
    margin-top: 10px;
    margin-left: 11px;
    font-weight: 700;
    font-size: 25px;
    color: #181b1c;
    width: 97%;
    text-align: start;
    border-bottom: 4px solid rgb(93, 45, 140, 0.2);
  }
`;

export const GridWrapper = styled.div`
  background-color: rgb(93, 45, 140, 0.2);
  padding: 15px 5px;
  display: grid;
  border-radius: 15px;
  grid-column-gap: 2px;
  grid-row-gap: 15px;
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
