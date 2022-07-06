import type { GetServerSideProps, NextPage } from "next";
import prisma from "../../lib/prisma";
import { ParsedUrlQuery } from "querystring";
import Price from "../../components/price.tsx/price";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;

  const product = await prisma.product.findFirst({
    where: {
      slug: slug,
    },
  });

  if (product) {
    return { props: { product: product } };
  } else {
    return {
      notFound: true,
    };
  }
};

/* const showPrice = (product) => {
  if (product.priceWithDiscount > 0) {
    return (
      <>
        <p>De: {product.price}</p>
        <p>Por: {product.priceWithDiscount}</p>
      </>
    );
  } else {
    return <p>{product.price}</p>;
  }
};
 */
const ProductPage: NextPage = ({ product }: any) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.headline}</h2>
      <p>{product.description}</p>
      <Price
        price={product.price}
        priceWidthDiscount={product.priceWithDiscount}
      />
    </div>
  );
};

export default ProductPage;
