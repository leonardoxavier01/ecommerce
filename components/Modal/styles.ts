import styled from "styled-components";

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 2%;
  right: 25%;
  left: 25%;
  z-index: 1;
`;

export const StyledModal = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 30rem;
  padding: 1rem;
  overflow: hidden;
  box-shadow: -1px 7px 15px -8px rgba(0, 0, 0, 0.64);
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
