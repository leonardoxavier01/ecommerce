import type { NextPage, GetServerSideProps } from "next";
import { CategoryPageProps, ProductProps } from "../../types/interfaces";
import product_services from "../../services/product_services";
import GridCards from "../../components/GridCards";
import ProductCard from "../../components/ProductCard";
import ContainerPage from "../../components/ContainerPage";
import Head from "next/head";
import { baseUrl } from "../../services/baseUrl";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const id = query.id?.toString();

  const category = await product_services.find(id);

  return { props: { category } };
};

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  return (
    <ContainerPage>
      <Head>
        <title>Categoria {category.name} - Funko Store</title>
      </Head>
      <GridCards categoryName={category.name}>
        {category.products.map((product: ProductProps) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            headline={product.headline}
            image={`${baseUrl}/images/${product.image}`}
            price={product.price}
            priceWithDiscount={product.priceWithDiscount}
            slug={product.slug}
          />
        ))}
      </GridCards>
    </ContainerPage>
  );
};

export default CategoryPage;
