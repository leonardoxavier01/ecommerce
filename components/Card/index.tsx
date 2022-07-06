import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import Button from "../Button";
import Price from "../Price";
import { Wrapper, BoxImage, BoxText, BoxPrice, BoxButton } from "./styles";

type CardProps = {
  img: StaticImageData;
  name: string;
  headiline: string;
  price: number;
  priceWithDiscount: number;
  slug: string;
};

export default function Card(props: CardProps) {
  const router = useRouter();
  const navigationByRoute = () => {
    router.push({
      pathname: "/products/[slug]",
      query: {
        slug: props.slug,
      },
    });
  };

  return (
    <Wrapper>
      <BoxImage onClick={() => navigationByRoute()}>
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
        priceWithDiscount={props.priceWithDiscount}
      />
      </BoxPrice>
      <BoxButton>
        <Button>Add to Card</Button>
      </BoxButton>
    </Wrapper>
  );
}
