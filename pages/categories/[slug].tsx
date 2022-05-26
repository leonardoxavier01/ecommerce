import type { NextPage, GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import Link from "next/link";
import Price from "../../components/price.tsx/price";
import { ParsedUrlQuery } from "querystring";
import Card from "../../components/Card";

import Mandalorian from "../../assets/images/the-mandalorian.png";
import ProductPage from "../products/[slug]";

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
  if (category) {
    return { props: { category } };
  } else {
    return { notFound: true };
  }
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
            <Price
              price={product.price}
              priceWidthDiscount={product.priceWidthDiscount}
            />
            <Card
              img={Mandalorian}
              name={product.name}
              headiline={product.headline}
              price={product.price}
              priceWidthDiscount={product.priceWidthDiscount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
