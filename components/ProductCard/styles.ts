import styled from "styled-components";

export const Container = styled.div`
  margin: 0 8px;
  width: 261px;
  height: 435px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px 7px 15px -8px rgba(0, 0, 0, 0.64);
  :hover {
    cursor: pointer;
    box-shadow: -1px 4px 15px -6px rgba(0, 0, 0, 0.64);
  }
  @media (max-width: 600px) {
    min-width: 320px;
  }
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.313rem;
  height: 15rem;
  margin-bottom: 10px;

  img {
    max-width: 240px;
    max-height: 14rem;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 221px;
  height: 54px;
  margin-bottom: 5px;
  overflow: hidden;
  span {
    text-align: start;
    font-size: 15px;
    font-weight: 600;
    color: #282d2e;
  }
`;

export const PriceWrapper = styled.div`
  width: 221px;
  margin-bottom: 5px;
`;
