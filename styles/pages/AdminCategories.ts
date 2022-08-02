import styled from "styled-components";

export const ContainerInputLogout = styled.div`
  padding: 0 0.2rem;
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: transparent;
    color: #2cdb46;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
`;

export const TitleCategories = styled.h1`
  width: 100%;
  margin-top: 1rem;
  text-align: start;
  font-size: 1.3rem;
  font-weight: 600;
  color: #181b1c;
  padding: 0 0.2rem;
`;

export const ContainerCategory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin-top: 0.7rem;
  box-shadow: -1px 7px 15px -15px rgba(0, 0, 0, 0.64);
  border-radius: 1rem;
  padding: 0.2rem 3.2rem;
  width: 100%;
  min-height: 7rem;
`;

export const WrapperCategory = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #181b1c;
  }
  span {
    font-size: 0.8rem;
    color: #181b1c;
    margin-bottom: 0.6rem;
  }
  button {
    background: #2cdb46;
    border: transparent;
    color: white;
    min-width: 6rem;
    height: 1.4rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

export const BoxButton = styled.div`
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 0.5rem;
  }
`;

export const Button = styled.button`
  background: ${(props) => props.color};
  border: transparent;
  color: white;
  min-width: 7.1rem;
  height: 1.4rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-right: 0.5rem;
  font-weight: 500;
`;
