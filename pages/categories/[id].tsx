import type { NextPage, GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import { ParsedUrlQuery } from "querystring";
import Card from "../../components/Card";
import mandalorian from "../../assets/images/the-mandalorian.png";
import Link from "next/link";
import Price from "../../components/price.tsx/price";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const responseCategory = await fetch(
    `https://quiet-anchorage-15734.herokuapp.com/categories/${id}`
  );
  const categoryObject = await responseCategory.json();

  const responseProducts = await fetch(
    `https://quiet-anchorage-15734.herokuapp.com/categories/${id}/products`
  );
  const productObject = await responseProducts.json();
  
  const category = {
    ...categoryObject,
    products: productObject,
  };

  /*  const category = await prisma.category.findFirst({
    where: {
      id: id,
    },
    include: { products: true },
  });
  if (category) {
    return { props: { category } };
  } else {
    return { notFound: true };
  } */
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
            <Price
              price={product.price}
              priceWidthDiscount={product.priceWithDiscount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

/* 
<Card
              key={product.id}
              slug={product.slug}
              img={mandalorian}
              name={product.name}
              headiline={product.headline}
              price={product.price}
              priceWidthDiscount={product.priceWidthDiscount}
            />
*/
