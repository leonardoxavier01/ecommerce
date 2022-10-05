import NumberFormat from "react-number-format";

interface IBRLFormat {
  value: number | null;
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

export default BRLFormat;
