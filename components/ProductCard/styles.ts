import styled from "styled-components";

export const Container = styled.div`
  margin: 0 8px;
  width: 16.313rem;
  height: 26.325rem;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.313rem;
  height: 15rem;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 221px;
  height: 45px;
  margin-bottom: 5px;
  overflow: hidden;
  span {
    font-family: "Poppins", sans-serif;
    text-align: start;
    font-size: 16px;
    font-weight: 600;
    color: #282d2e;
  }
`;

export const PriceWrapper = styled.div`
  width: 221px;
  margin-bottom: 5px;
`;
