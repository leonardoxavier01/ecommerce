import type { NextPage, GetServerSideProps } from "next";
import { CategoryPageProps } from "../../types/interfaces";
import Link from "next/link";
import Price from "../../components/Price";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query

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

  return { props: { category } };
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
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
