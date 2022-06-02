import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 6rem; //provisório somente para testes
  background-color: #ededed;
  border-radius: 2rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  height: 24rem;
  border: 1px solid #d3d3d3;
  box-shadow: 1px 2px 13px 0px rgba(0, 0, 0, 0.404);
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  p {
    font-size: 1.1rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.1rem;
    overflow: hidden;
  }
`;

export const BoxPrice = styled.div`
  margin: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
`;