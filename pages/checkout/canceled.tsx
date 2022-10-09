import Link from "next/link";
import Button from "../../components/Button";
import ContainerPage from "../../components/ContainerPage";
import SecondaryButton from "../../components/SecondaryButton";
import {
  ContainerButtons,
  ContainerCanceled,
  WrapperCanceled,
} from "../../styles/pages/CheckoutCanceled";

const Canceled = () => {
  return (
    <ContainerCanceled>
      <WrapperCanceled>
        <h1>Ops! parece que seu pagamento foi cancelado.</h1>
        <h2>
          Houve algum problema? você pode entrar em contato com o nosso suporte.
        </h2>
        <ContainerButtons>
          <Link href={{ pathname: "/suport" }} passHref>
            <Button>Página de suporte</Button>
          </Link>
          <p>ou</p>
          <Link href={{ pathname: "/" }} passHref>
            <SecondaryButton>Voltar para home</SecondaryButton>
          </Link>
        </ContainerButtons>
      </WrapperCanceled>
    </ContainerCanceled>
  );
};

export default Canceled;
