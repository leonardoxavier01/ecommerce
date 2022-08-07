import React from "react";
import { ButtonStyled } from "./styles";

interface IButtonModalProps {
  backgroundColor: string;
  colorFont?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonActionModal: React.FC<IButtonModalProps> = ({
  backgroundColor,
  colorFont,
  children,
  onClick,
}) => {
  return (
    <ButtonStyled
      backgroundColor={backgroundColor}
      colorFont={colorFont}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default ButtonActionModal;
