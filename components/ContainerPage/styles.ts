import styled from "styled-components";

export const Container = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.color};
  @media (max-width: 900px) {
    padding-top: 50px;
  }
`;
export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 300px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 95%;
  }
  @media (min-width: 900px) {
    max-width: 1200px;
  }
`;
