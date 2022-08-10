import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductProps } from "../../types/interfaces";
import Carousel from "../Carousel";
import ProductCard from "../ProductCard";

interface ICarouselProducts {
  categoryName: string;
  categoryId: string | undefined;
}

const CarouselProducts = ({ categoryName, categoryId }: ICarouselProducts) => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories/${categoryId}/products`)
      .then((resp) => resp.json())
      .then(setProducts);
  }, [categoryId]);

  return (
    <Carousel color="rgb(93, 45, 140, 0.2)" categoryName={categoryName}>
      {products.map((product) => (
        <div key={product.id}>
          <Link
            href={{
              pathname: "/products/[slug]",
              query: { slug: product.slug },
            }}
          >
            <a>
              <ProductCard
                slug={product.slug}
                name={product.name}
                headline={product.headline}
                image={
                  product.image
                    ? `http://localhost:5000/images/${product.image}`
                    : ""
                }
                price={product.price}
                priceWithDiscount={product.priceWithDiscount}
              />
            </a>
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselProducts;
