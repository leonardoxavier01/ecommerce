import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
import Price from "../price.tsx/price";
import { Wrapper, BoxImage, BoxText, BoxPrice, BoxButton } from "./styles";

type CardProps = {
  img: StaticImageData;
  name: string;
  headiline: string;
  price: number;
  priceWidthDiscount: number;
  slug: string;
};

export default function Card(props: CardProps) {
  return (
    <Wrapper>
      <Link
        href={{
          pathname: "/products/[slug]",
          query: { slug: props.slug },
        }}
      >
        <a>
          <BoxImage>
            <Image
              src={props.img}
              alt={`image funko ${props.img}`}
              width={190}
              height={190}
            />
          </BoxImage>
          <BoxText>
            <p>Funko Pop</p>
            <h2>{props.name}</h2>
            <h3>{props.headiline}</h3>
          </BoxText>
          <BoxPrice>
            <Price
              price={props.price}
              priceWidthDiscount={props.priceWidthDiscount}
            />
          </BoxPrice>
        </a>
      </Link>
      <BoxButton>
        <Button>Add to Card</Button>
      </BoxButton>
    </Wrapper>
  );
}
