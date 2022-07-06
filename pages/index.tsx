import type { NextPage, NextPageContext } from "next";
import Link from "next/link";

export const getServerSideProps = async (_context: NextPageContext) => {
  const response = await fetch("https://quiet-anchorage-15734.herokuapp.com/categories");
  const categories = await response.json();

  // const categories = await prisma.category.findMany();

  return { props: { categories } };
};

type Category = {
  id: string;
  name: string;
  slug: string
};

type HomeProps ={
  categories: Array<Category>
}

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link
            href={{
              pathname: "/categories/[id]",
              query: { id: category.id },
            }}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
