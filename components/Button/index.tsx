import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = (props: ButtonProps) => {
  return <ButtonStyled onClick={props.onClick}>{props.children}</ButtonStyled>;
};

export default Button;
