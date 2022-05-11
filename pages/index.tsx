import type { NextPage,  GetServerSideProps } from "next";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import Link from "next/link";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await prisma.category.findMany();
  return { props: { categories } };
};

const Home: NextPage = ({categories}: any) => {
  return(
    <ul>
      {categories.map ((category: any)=> (
        <li key={category.id}>
          <Link href={{
            pathname:"/categories/[slug]",
            query: {slug: category.slug}
          }}>
          {category.name}
          </Link>
        </li>
      ))}
    </ul>
  )
};

export default Home;
