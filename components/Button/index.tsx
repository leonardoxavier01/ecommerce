import { ButtonStyled } from "./styles";

type ButtonProps = {
  children: any;
};

const Button = ({ children }: ButtonProps) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
