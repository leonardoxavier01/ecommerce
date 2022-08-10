import React, { memo } from "react";
import { ButtonStyled } from "./styles";

interface IButtonModalProps {
  backgroundColor: string;
  colorFont?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonOpenModal = (props: IButtonModalProps) => {
  return (
    <ButtonStyled
      onClick={props.onClick}
      backgroundColor={props.backgroundColor}
      colorFont={props.colorFont}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default memo(ButtonOpenModal);
