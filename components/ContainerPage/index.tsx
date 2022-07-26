import { ReactNode } from "react";
import { Container, WrapperPage } from "./styles";

interface IContainerPageProps {
  children: JSX.Element | JSX.Element[] | string | string[] | ReactNode;
}

const ContainerPage = ({ children }: IContainerPageProps) => {
  return (
    <Container>
      <WrapperPage>{children}</WrapperPage>
    </Container>
  );
};

export default ContainerPage;
