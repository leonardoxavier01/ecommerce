import type { GetServerSideProps, NextPage } from "next";
import {
  ItemForStripe,
  ProductPageProps,
  ProductProps,
} from "../../types/interfaces";
import Price from "../../components/Price";
import ContainerPage from "../../components/ContainerPage";
import Button from "../../components/Button";
import CarouselProducts from "../../components/CarouselProducts";
import {
  BoxImageProduct,
  ContainerButtons,
  Description,
  Details,
  ProductDetails,
  WrapperProduct,
} from "../../styles/pages/Product";
import Head from "next/head";
import { baseUrl } from "../../services/baseUrl";
import SecondaryButton from "../../components/SecondaryButton";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart";
import Router from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const responseProduct = await fetch(`${baseUrl}/products/${slug}`);

  const productObject = await responseProduct.json();

  if (productObject) {
    return { props: { product: productObject } };
  } else {
    return {
      notFound: true,
    };
  }
};

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);
  const [arrayStripe, setArrayStripe] = useState<ItemForStripe[]>([]);

  useEffect(() => {
    const itemForCheckout: ItemForStripe = {
      productId: product.id,
      quantity: 1,
    };

    setArrayStripe([itemForCheckout]);
  }, [product.id]);

  const submitForCheckout = async () => {
    const response = await fetch(`${baseUrl}/create-checkout-session`, {
      method: "POST",
      body: JSON.stringify({ arrayStripe }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (response.ok) {
      alert("Direcionando para pagina de pagamento");

      const data = await response.json();

      Router.push(data.data);
    } else {
      alert("Houve um erro por aqui. Tente novamente mais tarde");
    }
  };

  return (
    <ContainerPage>
      <Head>
        <title>{product.name} - Funko Store</title>
      </Head>
      <WrapperProduct>
        <ProductDetails>
          <BoxImageProduct>
            <img
              src={`${baseUrl}/images/${product.image}`}
              alt={`imagem do produto ${product.name}`}
            />
          </BoxImageProduct>
          <Details>
            <h1>{product.name}</h1>
            <h2>{product.headline}</h2>
            <Price
              price={product.price}
              priceWithDiscount={product.priceWithDiscount}
            />
            <ContainerButtons>
              <SecondaryButton
                onClick={() =>
                  addProductToCart(
                    product.id,
                    product.slug,
                    product.priceWithDiscount
                  )
                }
              >
                Adicionar Ao Carrinho
              </SecondaryButton>
              <Button onClick={submitForCheckout}>COMPRAR</Button>
            </ContainerButtons>
          </Details>
        </ProductDetails>
        {product.description && (
          <Description>{product.description}sas</Description>
        )}
      </WrapperProduct>
      <CarouselProducts
        categoryName="Produtos da mesma categoria"
        categoryId={product.categoryId}
      />
    </ContainerPage>
  );
};

export default ProductPage;
