import { memo, useContext, useEffect, useState } from "react";
import Link from "next/link";
import NumberFormat from "react-number-format";
import { ProductProps } from "../../types/interfaces";
import {
  BoxButtons,
  BoxImage,
  Container,
  PriceProduct,
  ProductDetails,
  WrapperTextButtons,
} from "./styles";
import { CartContext } from "../../contexts/cart";
import { baseUrl } from "../../services/baseUrl";

interface IProductInCart {
  productSlug: string | undefined;
  qtd: number;
  price: number | undefined;
}

const ProductInCart = ({ productSlug, qtd, price }: IProductInCart) => {
  const [product, setProduct] = useState<ProductProps>();

  const { addProductToCart, removeProductToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${baseUrl}/products/${productSlug}`)
      .then((resp) => resp.json())
      .then(setProduct);
  }, [productSlug]);

  return (
    <>
      <Container>
        <Link
          href={{
            pathname: "/products/[slug]",
            query: { slug: productSlug },
          }}
          passHref
        >
          <a>
            <BoxImage>
              {product && (
                <img
                  src={`${baseUrl}/images/${product?.image}`}
                  alt={`imagem do produto ${product?.name}`}
                />
              )}
            </BoxImage>
          </a>
        </Link>
        <ProductDetails>
          <WrapperTextButtons>
            <p>{product?.name}</p>
            <BoxButtons>
              <button onClick={() => removeProductToCart(product?.id)}>
                -
              </button>
              <span>{qtd}</span>
              <button
                onClick={() =>
                  addProductToCart(
                    product?.id,
                    product?.slug,
                    product?.priceWithDiscount
                  )
                }
              >
                +
              </button>
            </BoxButtons>
          </WrapperTextButtons>
          <PriceProduct>
            <NumberFormat
              value={price}
              displayType={"text"}
              decimalSeparator={","}
              thousandSeparator={"."}
              fixedDecimalScale={true}
              decimalScale={2}
              prefix={"R$ "}
            />
          </PriceProduct>
        </ProductDetails>
      </Container>
      <hr />
    </>
  );
};

export default memo(ProductInCart);
