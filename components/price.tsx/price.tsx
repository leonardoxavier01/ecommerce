import NumberFormat from "react-number-format";

interface PriceInput {
  price: number;
  priceWithDiscount: number;
}

const Price = (params: PriceInput) => {
  const { price } = params;
  const { priceWithDiscount } = params;

  if (priceWithDiscount > 0) {
    return (
      <>
        <p>
          De:
          <NumberFormat
            value={price}
            displayType={"text"}
            decimalSeparator={","}
            thousandSeparator={"."}
            fixedDecimalScale={true}
            decimalScale={2}
            prefix={"R$ "}
          />
        </p>
        <p>
          Por:
          <NumberFormat
            value={priceWithDiscount}
            displayType={"text"}
            decimalSeparator={","}
            thousandSeparator={"."}
            fixedDecimalScale={true}
            decimalScale={2}
            prefix={"R$ "}
          />
        </p>
      </>
    );
  } else {
    return (
      <p>
        <NumberFormat
          value={price}
          displayType={"text"}
          decimalSeparator={","}
          thousandSeparator={"."}
          fixedDecimalScale={true}
          decimalScale={2}
          prefix={"R$ "}
        />
      </p>
    );
  }
};

export default Price;
