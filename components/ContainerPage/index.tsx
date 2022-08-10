import { ReactNode } from "react";
import { Container, WrapperPage } from "./styles";

interface IContainerPageProps {
  color?: string;
  children: JSX.Element | JSX.Element[] | string | string[] | ReactNode;
}

const ContainerPage = ({ children, color }: IContainerPageProps) => {
  return (
    <Container color={color}>
      <WrapperPage>{children}</WrapperPage>
    </Container>
  );
};

export default ContainerPage;
