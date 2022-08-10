import type { GetServerSideProps, NextPage } from "next";
import { ProductPageProps } from "../../types/interfaces";
import Price from "../../components/Price";
import ContainerPage from "../../components/ContainerPage";
import Button from "../../components/Button";
import CarouselProducts from "../../components/CarouselProducts";
import {
  BoxImageProduct,
  Description,
  Details,
  ProductDetails,
  WrapperProduct,
} from "../../styles/pages/Product";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  const responseProduct = await fetch(`http://localhost:5000/products/${slug}`);

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
  return (
    <ContainerPage>
      <Head>
        <title>{product.name} - Funko Store</title>
      </Head>
      <WrapperProduct>
        <ProductDetails>
          <BoxImageProduct>
            <img
              src={`http://localhost:5000/images/${product.image}`}
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
            <Button>COMPRAR</Button>
          </Details>
        </ProductDetails>
        <Description>{product.description}</Description>
      </WrapperProduct>
      <CarouselProducts
        categoryName="Funkos da mesma categoria"
        categoryId={product.categoryId}
      />
    </ContainerPage>
  );
};

export default ProductPage;
