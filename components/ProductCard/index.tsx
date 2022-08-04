import { Container, BoxImage, Text, PriceWrapper } from "./styles";
import { ProductProps } from "../../types/interfaces";
import Button from "../Button";
import Price from "../Price";
import imageUndefined from "../../assets/images/image-undefined.jpg";
import Image from "next/image";

const ProductCard = (props: ProductProps) => {
  return (
    <Container>
      <BoxImage>
        {props.image ? (
          <img src={props.image} alt={`imagem do produto ${props.name}`} />
        ) : (
          <Image
            src={imageUndefined}
            alt={`produto sem imagem`}
            width={240}
            height={240}
          />
        )}
      </BoxImage>
      <Text>
        <span>
          {props.name} - {props.headline}
        </span>
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
