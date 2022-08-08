import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-left: 15px;
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
  padding: 7px 0;
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

export const BoxCarouselButtons = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const Button = styled.button`
  position: absolute;
  background: white;
  width: 49px;
  height: 49px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: -1px 4px 15px -4px rgba(0, 0, 0, 0.64);
  cursor: pointer;
  z-index: 1;
  &:nth-of-type(1){
    top: 45%;
    left: 0;
    transform: translate(-80%, -50%);
  }
  &:nth-of-type(2){
    top: 45%;
    right: 0;
    transform: translate(80%, -50%);
  }
  @media (max-width: 900px) {
    background-color: antiquewhite;
    display: none;
  }
`;