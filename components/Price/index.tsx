import NumberFormat from "react-number-format";

const BRLFormat = ({ value }) => {
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

const withDiscount = (price, priceWithDiscount) => {
  const discount = (1 - priceWithDiscount / price) * 100;

  return (
    <>
      <p>
        De:
        <BRLFormat value={price} />
      </p>
      <p>
        Por:
        <BRLFormat value={priceWithDiscount} />
      </p>
      <p>
        Desconto:
        <NumberFormat
          value={discount}
          displayType={"text"}
          suffix={"%"}
          fixedDecimalScale={true}
          decimalScale={2}
          decimalSeparator={","}
          thousandSeparator={"."}
        />
      </p>
    </>
  );
};

const withoutDiscount = (price) => {
  return (
    <p>
      <BRLFormat value={price} />
    </p>
  );
};

const Price = ({ price, priceWithDiscount }) => {
  if (priceWithDiscount > 0)
    return withDiscount(price, priceWithDiscount)
  else
    return withoutDiscount(price)
}

export default Price
