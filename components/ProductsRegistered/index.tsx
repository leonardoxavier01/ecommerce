import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { MdExpandMore } from "react-icons/md";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductModalDel from "../ProductModalDel";
import Upload from "../Upload";
import {
  ProductDetails,
  WrapperDetails,
  BoxUploadLink,
  Container,
} from "./styles";
import imageUndefined from "../../assets/images/image-undefined.jpg";
import ProductUpdate from "../ProductUpdate";

const ProductsRegistered = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Container>
      {products.map((product) => (
        <div key={product.id}>
          <ProductDetails>
            <WrapperDetails>
              {product.image ? (
                <img
                  src={
                    product.image
                      ? `http://localhost:5000/images/${product.image}?w=100&h=100&c=true`
                      : ""
                  }
                  alt={`imagem do produto ${product.name}`}
                />
              ) : (
                <Image
                  src={imageUndefined}
                  alt="imagem não definida"
                  width={100}
                  height={100}
                />
              )}
              <p>{product.name}</p>
              <span>id: {product.id}</span>
              <BoxUploadLink>
                <Upload id={product.id} />
                <Link
                  href={{
                    pathname: "/products/[slug]",
                    query: { slug: product.slug },
                  }}
                >
                  Ver anúncio
                </Link>
              </BoxUploadLink>
            </WrapperDetails>
            <details>
              <summary>
                <MdExpandMore size={45} />
              </summary>
              <ProductUpdate productId={product.id} />
              <ProductModalDel
                productId={product.id}
                productName={product.name}
              />
            </details>
          </ProductDetails>
        </div>
      ))}
    </Container>
  );
};

export default ProductsRegistered;
