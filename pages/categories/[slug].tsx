import type { NextPage, GetServerSideProps } from "next";
import prisma from "../../lib/prisma";
import { ParsedUrlQuery } from "querystring";
import Card from "../../components/Card";
import mandalorian from "../../assets/images/the-mandalorian.png";

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
          <Card
            key={product.id}
            slug={product.slug}
            img={mandalorian}
            name={product.name}
            headiline={product.headline}
            price={product.price}
            priceWidthDiscount={product.priceWidthDiscount}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
