import NumberFormat from "react-number-format";

const Price = ({ price, priceWidthDiscount }) => {
  if (priceWidthDiscount > 0) {
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
            value={priceWidthDiscount}
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
