import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import { ProductProps } from "../../types/interfaces";
import Button from "../Button";
import Input from "../Input";
import { Container } from "./styles";

interface IParamsProps {
  productId: string | number | undefined;
}

const ProductUpdate: React.FC<IParamsProps> = ({ productId }: any) => {
  const { submitUpdateProduct, renderForm, products } =
    useContext(ProductsContext);

  const indexProduct = products.findIndex((objct) => {
    return objct.id === productId;
  });

  const preDefinedObject: ProductProps = products[indexProduct];

  return (
    <Container>
      <p>Editar informações do produto:</p>
      <label>Nome:</label>
      <Input
        type="text"
        defaultValue={preDefinedObject.name}
        onChange={(e: any) => renderForm("name", e.target.value)}
      />
      <label>Preço sem desconto:</label>
      <Input
        type="number"
        defaultValue={preDefinedObject.price}
        onChange={(e: any) => renderForm("price", Number(e.target.value))}
      />
      <label>Preço com desconto:</label>
      <Input
        type="number"
        defaultValue={preDefinedObject.priceWithDiscount}
        onChange={(e: any) =>
          renderForm("priceWithDiscount", Number(e.target.value))
        }
      />
      <label>Headline/copy:</label>
      <textarea
        defaultValue={preDefinedObject.headline}
        onChange={(e) => renderForm("headline", e.target.value)}
      ></textarea>
      <label>Descrição:</label>
      <textarea
        defaultValue={preDefinedObject.description}
        onChange={(e) => renderForm("description", e.target.value)}
      ></textarea>
      <Button width="100%" onClick={() => submitUpdateProduct(productId)}>
        Editar produto
      </Button>
    </Container>
  );
};

export default ProductUpdate;
