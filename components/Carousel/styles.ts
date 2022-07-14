import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 26px;
    text-shadow: 1px 1px 5px #a2a5a6;
    color: #181b1c;
    width: 100%;
  }
`;

export const WrapperCarousel = styled.div`
  padding: 3px 0;
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 10px;
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    background-color: antiquewhite;
    display: none;
  }
`;
