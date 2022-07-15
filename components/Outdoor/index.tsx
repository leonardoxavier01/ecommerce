import { Container, TextImageButton, ImagesWrapper } from "./styles";
import marvel from "../../assets/images/marvel-logo.png";
import Button from "../Button";
import Image from "next/image";
import image2 from "../../assets/images/spider-man.png";

const Outdoor = () => {
  return (
    <Container>
      <TextImageButton>
        <Image src={marvel} width={184} height={71} alt="marvel logo" />
        <h1>CONHEÇA A NOVA COLEÇÃO DE FUNKOS DA MARVEL</h1>
        <Button color="#EE171F">COLEÇÃO MARVEL</Button>
      </TextImageButton>
      <ImagesWrapper>
        <Image src={image2} width={430} height={430} alt="marvel logo" />
      </ImagesWrapper>
    </Container>
  );
};

export default Outdoor;
