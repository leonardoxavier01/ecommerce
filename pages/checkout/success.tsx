import {
  BuyConfirmed,
  ContainerSucces,
} from "../../styles/pages/CheckoutSucces";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Success = () => {
  return (
    <ContainerSucces>
      <BuyConfirmed>
        <IoIosCheckmarkCircleOutline size={100} color={'#1DD54D'}/>
        <h1>Pagamento realizado com sucesso</h1>
        <h2>Estamos processando seu pedido</h2>
      </BuyConfirmed>
    </ContainerSucces>
  );
};

export default Success;
