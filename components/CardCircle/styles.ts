import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  box-shadow: -1px 7px 15px -8px rgba(0, 0, 0, 0.64);
  :hover {
    cursor: pointer;
    box-shadow: -1px 7px 15px -6px rgba(0, 0, 0, 0.64);
  }
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.5rem;
  height: 12.5rem;
  border-radius:50%;
  img {
    border-radius: 50%;
  }
`;
