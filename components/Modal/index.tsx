import React, { ReactNode } from "react";
import { ContainerModal, StyledModal } from "./styles";

interface IModal {
  children: ReactNode;
}

const Modal = ({ children }: IModal) => {
  return (
    <ContainerModal>
      <StyledModal>{children}</StyledModal>
    </ContainerModal>
  );
};

export default Modal;
