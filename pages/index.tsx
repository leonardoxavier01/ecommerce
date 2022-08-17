import type { NextPage, NextPageContext } from "next";
import { HomeProps } from "../types/interfaces";

import Link from "next/link";
import ContainerPage from "../components/ContainerPage";
import Carousel from "../components/Carousel";
import CardCircle from "../components/CardCircle";
import Marvel from "../assets/images/marvel.jpg";
import Outdoor from "../components/Outdoor";
import CarouselProducts from "../components/CarouselProducts";
import FeaturedCategories from "../components/FeaturedCategories";
import Head from "next/head";
import categoriesCarousel from "../data/categoriesCarousel";

export const getServerSideProps = async (_context: NextPageContext) => {
  const response = await fetch(`https://quiet-anchorage-15734.herokuapp.com/categories`);
  const categories = await response.json();

  return { props: { categories } };
};

const Home: NextPage<HomeProps> = ({ categories }) => {
  return (
    <ContainerPage>
      <Head>
        <title>Funko Store - loja de colecionáveis</title>
      </Head>
      <Outdoor />
      <Carousel color="rgb(93, 45, 140, 0.2)">
        {categoriesCarousel.map((category) => (
          <div key={category.id}>
            <Link
              href={{
                pathname: "/categories/[id]",
                query: { id: category.id },
              }}
            >
              <a>
                <CardCircle
                  categoryName={category.name}
                  image={category.image}
                />
              </a>
            </Link>
          </div>
        ))}
      </Carousel>
      <FeaturedCategories />
      {categories.slice(0, 5).map((category) => (
        <CarouselProducts
          key={category.id}
          categoryName={category.name}
          categoryId={category.id}
        />
      ))}
    </ContainerPage>
  );
};

export default Home;
