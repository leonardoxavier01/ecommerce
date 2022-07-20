import { Container, BoxImage, Text, PriceWrapper } from "./styles";
import { ProductProps } from "../../types/interfaces";
import img2 from "../../assets/images/machine-gun.png";
import Image from "next/image";
import Button from "../Button";
import Price from "../Price";

const ProductCard = (props: ProductProps) => {
  return (
    <Container>
      <BoxImage>
        <Image width={240} height={240} src={img2} alt="img mandalorian" />
      </BoxImage>
      <Text>
        <span>{props.name}</span>
      </Text>
      <PriceWrapper>
        <Price
          price={props.price}
          priceWithDiscount={props.priceWithDiscount}
        />
      </PriceWrapper>
      <Button>COMPRAR</Button>
    </Container>
  );
};

export default ProductCard;
