import { Container, BoxImage, Text, PriceWrapper } from "./styles";
import { ProductProps } from "../../types/interfaces";
import Button from "../Button";
import Price from "../Price";

const ProductCard = (props: ProductProps) => {
  return (
    <Container>
      <BoxImage>
        <img src={props.image} alt={`imagem do produto ${props.name}`} />
      </BoxImage>
      <Text>
        <span>{props.name} - {props.headline}</span>
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
