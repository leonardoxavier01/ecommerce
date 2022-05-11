import type { GetServerSideProps, NextPage } from "next";
import prisma from "../../lib/prisma";
import NumberFormat from "react-number-format";
import { ParsedUrlQuery } from "querystring";

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

  /* const product = {
    name: "name do produto test",
    price: 10.5,
    description: "lorem ipsum lorem",
  }; */
  return { props: { product: product } };
};

const ProductPage: NextPage = ({ product }: any) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.headline}</h2>
      <p>{product.description}</p>
      <p>
        <NumberFormat
          value={product.price}
          displayType={"text"}
          decimalSeparator={","}
          thousandSeparator={"."}
          fixedDecimalScale={true}
          decimalScale={2}
          prefix={"R$"}
        />
      </p>
    </div>
  );
};

export default ProductPage;
