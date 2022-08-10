import styled from "styled-components";

export const ContainerNotFound = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 35rem;
  width: 18rem;
  margin: 2rem 0;
  background-color: #8257e6;
  border-radius: 36% 64% 46% 54% / 30% 42% 58% 70%;
  border: 1px solid #d3d3d3;
  box-shadow: 1px 2px 13px 0px rgba(0, 0, 0, 0.404);
`;

export const TextContent = styled.div`
  width: 40rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  h1 {
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
  }
`;

export const BoxButton = styled.div`
  margin: 1rem 0 3rem 0;
`;
