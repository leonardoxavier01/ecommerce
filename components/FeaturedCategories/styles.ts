import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 339px;
  margin: 10px 0;
  background-color: antiquewhite;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

interface IProps {
  color?: string;
}

export const BoxButtonImage = styled.div<IProps>`
  background-color: ${(props) => props.color || "#FFFFFF"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 339px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
