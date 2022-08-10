import Image from "next/image";
import Link from "next/link";
import Funko from "../assets/images/machine-gun.png";
import Button from "../components/Button";
import { BoxButton } from "../styles/pages/AdminCategories";
import {
  BoxImage,
  ContainerNotFound,
  TextContent,
} from "../styles/pages/NotFound";

const CustomError = () => {
  return (
    <ContainerNotFound>
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
    </ContainerNotFound>
  );
};

export default CustomError;
