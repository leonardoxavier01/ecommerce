import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  color?: string;
  borderColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
};

const SecondaryButton = (props: ButtonProps | any) => {
  return (
    <ButtonStyled
      {...props}
      width={props.width}
      color={props.color}
      borderColor={props.borderColor}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default SecondaryButton;
