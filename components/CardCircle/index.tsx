import { Container, BoxImage } from "./styles";
import Image, { StaticImageData } from "next/image";

interface ICardCircle {
  image: StaticImageData | string;
}

const CardCircle = ({ image}: ICardCircle) => {
  return (
    <Container>
      <BoxImage>
        <Image src={image} width={200} height={200} alt="marvel" />
      </BoxImage>
    </Container>
  );
};

export default CardCircle;
