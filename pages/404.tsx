import Image from "next/image";
import Link from "next/link";
import Funko from "../assets/images/machine-gun.png";
import Button from "../components/Button";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35rem;
  width: 30%;
  margin: 2rem 0;
  background-color: #8257e6;
  border-radius: 36% 64% 46% 54% / 30% 42% 58% 70%;
`;
export const TextContent = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  h1 {
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
  }
`;

export const BoxButton = styled.div`
  margin-bottom: 5rem;
`;

const CustomError = () => {
  return (
    <Container>
      <BoxImage>
        <Image src={Funko} alt="Funko pop Machine-Gun com uma guitarra" />
      </BoxImage>
      <TextContent>
        <h1>Página não encontrada :(</h1>
        <p>A página que você tentou acessar está indisponível ou não existe.</p>
      </TextContent>
      <BoxButton>
        <Button>
          <Link href={{ pathname: "/" }}>Ir para a home</Link>
        </Button>
      </BoxButton>
    </Container>
  );
};

export default CustomError;
