import type { NextPage, GetServerSideProps } from "next";
import { CategoryPageProps, ProductProps } from "../../types/interfaces";
import product_services from "../../services/product_services";
import Link from "next/link";
import GridCards from "../../components/GridCards";
import ProductCard from "../../components/ProductCard";
import ContainerPage from "../../components/ContainerPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const id = query.id?.toString();

  const category = await product_services.find(id);

  return { props: { category } };
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  console.log(category.name);
  return (
    <ContainerPage>
      <GridCards categoryName={category.name}>
        {category.products.map((product: ProductProps) => (
          <div key={product.id}>
            <Link
              href={{
                pathname: "/products/[slug]",
                query: { slug: product.slug },
              }}
            >
              <a>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  priceWithDiscount={product.priceWithDiscount}
                  slug={product.slug}
                />
              </a>
            </Link>
          </div>
        ))}
      </GridCards>
    </ContainerPage>
  );
};

export default CategoryPage;
