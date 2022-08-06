import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
};

const Button = (props: ButtonProps | any) => {
  return (
    <ButtonStyled
      {...props}
      width={props.width}
      color={props.color}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
