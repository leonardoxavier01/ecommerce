import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: ReactNode;
  color?: string;
  hoverColor?: string;
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
      hoverColor={props.hoverColor}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
