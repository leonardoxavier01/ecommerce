import type { NextPage, GetServerSideProps } from "next";
import { CategoryPageProps } from "../../types/interfaces";
import product_services from "../../services/product_services";
import Link from "next/link";
import Price from "../../components/Price";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context
  const id = query.id?.toString()

  const category = await product_services.find(id)

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
