import ProductCard from "../components/ProductCard";
import styles from "../styles/Test.module.css";
import Carousel from "../components/Carousel";
import CardCircle from "../components/CardCircle";
import Marvel from "../assets/images/marvel.jpg";
import Outdoor from "../components/Outdoor";
import FeaturedCategories from "../components/FeaturedCategories";

const TestComponents = () => {
  return (
    <div className={styles.containerPage}>
      <div className={styles.WrapperPage}>
        <Outdoor />
        <Carousel color="#fff">
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
          <CardCircle image={Marvel} />
        </Carousel>
        <Carousel categoryName="Novos lançamentos">
          <ProductCard
            name={
              "THE MANDALORIAN - SAGA START WARS SAGA START WARS SAGA START WARS"
            }
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
        </Carousel>
        <FeaturedCategories />
        <Carousel categoryName="Funkos mais vendidos">
          <ProductCard
            name={
              "THE MANDALORIAN - SAGA START WARS SAGA START WARS SAGA START WARS"
            }
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
          <ProductCard
            name={"THE MANDALORIAN - SAGA START WARS"}
            price={100}
            slug="test"
            priceWithDiscount={49}
          />
        </Carousel>
      </div>
    </div>
  );
};

export default TestComponents;
