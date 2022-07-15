import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #321414;
  min-height: 439px;
  margin-bottom: 1rem;
  h1 {
    color: #f1f1f1;
    font-size: 36px;
    font-family: "Poppins", sans-serif;
    color: white;
  }
  @media(max-width: 600px){
    padding: 28px 15px;
  }
`;

export const TextImageButton = styled.div`
  width: 620px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 372px;
  height: 362px;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 1150px) {
    margin-top: 15px;
    justify-content: flex-start;
  }
`;
