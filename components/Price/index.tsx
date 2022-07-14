import NumberFormat from "react-number-format";
import {
  ContainerPrice,
  PriceStyled,
  PriceDescountStyled,
  Descount,
  WithoutDiscount,
} from "./styles";

interface IBRLFormat {
  value: number;
}

const BRLFormat = ({ value }: IBRLFormat) => {
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      decimalSeparator={","}
      thousandSeparator={"."}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={"R$ "}
    />
  );
};

const withDiscount = (price: number, priceWithDiscount: number) => {
  const discount = (1 - priceWithDiscount / price) * 100;

  return (
    <ContainerPrice>
      <PriceStyled>
        <BRLFormat value={price} />
      </PriceStyled>
      <PriceDescountStyled>
        <BRLFormat value={priceWithDiscount} />
      </PriceDescountStyled>
      <Descount>
        <NumberFormat
          value={discount}
          displayType={"text"}
          suffix={"%"}
          fixedDecimalScale={true}
          decimalScale={0}
          decimalSeparator={","}
          thousandSeparator={"."}
        />{" "}
        off
      </Descount>
    </ContainerPrice>
  );
};

const withoutDiscount = (price: number) => {
  return (
    <ContainerPrice>
      <WithoutDiscount>
        <BRLFormat value={price} />
      </WithoutDiscount>
    </ContainerPrice>
  );
};

interface IPrice {
  price: number;
  priceWithDiscount: number;
}

const Price = ({ price, priceWithDiscount }: IPrice) => {
  if (priceWithDiscount > 0) return withDiscount(price, priceWithDiscount);
  else return withoutDiscount(price);
};

export default Price;
