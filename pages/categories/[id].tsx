import type { NextPage, GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import Price from "../../components/Price";

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as IParams;

  const responseCategory = await fetch(
    `${process.env.BACKEND_API}/categories/${id}`
  );
  const categoryObject = await responseCategory.json();

  const responseProducts = await fetch(
    `${process.env.BACKEND_API}/categories/${id}/products`
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
              priceWithDiscount={product.priceWithDiscount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
