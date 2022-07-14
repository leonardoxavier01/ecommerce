import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  color: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled color={props.color} onClick={props.onClick}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
