import { Container, BoxImage } from "./styles";
import Image, { StaticImageData } from "next/image";

interface ICardCircle {
  image: StaticImageData | string | any;
  categoryName: string;
}

const CardCircle = ({ image, categoryName }: ICardCircle) => {
  return (
    <Container id={categoryName}>
      <BoxImage>
        <Image src={image} width={200} height={200} alt="marvel" />
      </BoxImage>
    </Container>
  );
};

export default CardCircle;
