import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Button from "../Button";
import Input from "../Input";
import { FormRegisterProduct } from "./styles";

const RegisterProduct = () => {
  const { submitProduct, renderForm } = useContext(ProductsContext);

  return (
    <FormRegisterProduct
      onSubmit={submitProduct}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <p>Criar novo produto:</p>

      <label>Nome:</label>
      <Input
        type="text"
        required
        onChange={(e: any) => renderForm("name", e.target.value)}
      />
      <label>Preço sem desconto:</label>
      <Input
        type="number"
        required
        onChange={(e: any) => renderForm("price", Number(e.target.value))}
      />
      <label>Preço com desconto:</label>
      <Input
        type="number"
        onChange={(e: any) =>
          renderForm("priceWithDiscount", Number(e.target.value))
        }
      />
      <label>Headline/copy:</label>
      <textarea
        required
        onChange={(e) => renderForm("headline", e.target.value)}
      ></textarea>
      <label>Descrição:</label>
      <textarea
        required
        onChange={(e) => renderForm("description", e.target.value)}
      ></textarea>
      <Button width="100%">Criar produto</Button>
    </FormRegisterProduct>
  );
};

export default RegisterProduct;
