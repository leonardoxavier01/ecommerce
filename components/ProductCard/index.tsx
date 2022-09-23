import { useContext } from "react";
import { Container, BoxImage, Text, PriceWrapper } from "./styles";
import { ProductProps } from "../../types/interfaces";
import Button from "../Button";
import Price from "../Price";
import imageUndefined from "../../assets/images/image-undefined.jpg";
import Image from "next/image";
import { CartContext } from "../../contexts/cart";
import Link from "next/link";

const ProductCard = (props: ProductProps) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <Container>
      <Link
        href={{
          pathname: "/products/[slug]",
          query: { slug: props.slug },
        }}
        passHref
      >
        <a>
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
        </a>
      </Link>
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
      <Button
        onClick={() =>
          addProductToCart(props.id, props.slug, props.priceWithDiscount)
        }
        hoverColor="#3E205B"
      >
        ADICIONAR AO CARRINHO
      </Button>
    </Container>
  );
};

export default ProductCard;
