import styled from "styled-components";

export const CategoryNameStyled = styled.a`
  margin: 0 0 5px 15px;
  font-weight: 600;
  font-size: 25px;
  color: #181b1c;
  width: 100%;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 19px;
  }

  :hover {
    text-decoration: underline;
    color: #2f3841;
  }
`;
