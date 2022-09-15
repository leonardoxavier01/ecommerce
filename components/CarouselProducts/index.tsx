import Link from "next/link";
import { useEffect, useState } from "react";
import { baseUrl } from "../../services/baseUrl";
import { ProductProps } from "../../types/interfaces";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";
import { CategoryNameStyled } from "./styles";

interface ICarouselProducts {
  categoryName: string;
  categoryId: string | undefined;
}

const CarouselProducts = ({ categoryName, categoryId }: ICarouselProducts) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/categories/${categoryId}/products`)
      .then((resp) => resp.json())
      .then(setProducts);
  }, [categoryId]);

  console.log(baseUrl);

  return (
    <>
      <Link
        href={{
          pathname: "/categories/[id]",
          query: { id: categoryId },
        }}
        passHref
      >
        <CategoryNameStyled>{categoryName}</CategoryNameStyled>
      </Link>
      <Carousel color="rgb(93, 45, 140, 0.2)" categoryName={categoryName}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              slug={product.slug}
              name={product.name}
              headline={product.headline}
              image={product.image ? `${baseUrl}/images/${product.image}` : ""}
              price={product.price}
              priceWithDiscount={product.priceWithDiscount}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselProducts;
