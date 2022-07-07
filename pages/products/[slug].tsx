import type { GetServerSideProps, NextPage } from "next";
import { ProductPageProps } from "../../types/interfaces";
import Price from "../../components/Price";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query

  const responseProduct = await fetch(
    `${process.env.BACKEND_API}/products/${slug}`
  );

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
    <div>
      <h1>{product.name}</h1>
      <h2>{product.headline}</h2>
      <p>{product.description}</p>
      <Price
        price={product.price}
        priceWithDiscount={product.priceWithDiscount}
      />
    </div>
  );
};

export default ProductPage;
