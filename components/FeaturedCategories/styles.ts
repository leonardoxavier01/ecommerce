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
  background: ${(props) => props.color || "#FFFFFF"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 339px;
  :hover {
    box-shadow: -1px 7px 15px -6px rgba(0, 0, 0, 0.64);
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
