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
    color: #181b1c;
    width: 100%;
  }
`;

interface IProps {
  color?: string;
}

export const WrapperCarousel = styled.div<IProps>`
  padding: 3px 0;
  width: 100%;
  background-color: ${(props) => props.color};
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
