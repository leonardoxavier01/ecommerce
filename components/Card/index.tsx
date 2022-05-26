import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import Button from "../Button";
import Price from "../price.tsx/price";

export const Wrapper = styled.div`
  margin: 6rem; //provisório somente para testes
  background-color: #ededed;
  border-radius: 2rem;
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  height: 24rem;
  border: 1px solid #d3d3d3;
  cursor: pointer;
  box-shadow: 1px 2px 13px 0px rgba(0, 0, 0, 0.404);
`;

export const BoxImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  p {
    font-size: 1.1rem;
  }
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.1rem;
    overflow: hidden;
  }
`;

export const BoxPrice = styled.div`
  margin: 0.6rem 0.9rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const BoxButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.50rem;
`;

type CardProps = {
  img: StaticImageData;
  name: string;
  headiline: string;
  price: number;
  priceWidthDiscount: number;
};

const Card = (props: CardProps) => {
  return (
    <Wrapper>
      <BoxImage>
        <Image src={props.img} alt="The mandalorian" width={190} height={190} />
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
      <BoxButton>
        <Button>Add to Card</Button>
      </BoxButton>
    </Wrapper>
  );
};

export default Card;
