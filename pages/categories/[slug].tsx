import type { NextPage, GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import Link from "next/link";
import NumberFormat from "react-number-format";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;

  const category = await prisma.category.findFirst({
    where: {
      slug: slug,
    },
    include: { products: true },
  });
  return { props: { category } };
};

const CategoryPage: NextPage = ({ category }: any) => {
  return (
    <div>
      <h1>{category.name}</h1>
      <div>
        {category.products.map((product: any) => (
          <div key={product.id}>
            <h2>
              <Link
                href={{
                  pathname: "/products/[slug]",
                  query: { slug: product.slug },
                }}
              >
                {product.name}
              </Link>
            </h2>
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
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
