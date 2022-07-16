import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
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
