import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart";
import ContainerPage from "../../components/ContainerPage";
import {
  ContainerCart,
  InitiateCheckout,
  TextWrapper,
  WrapperCart,
} from "../../styles/pages/Cart";
import ProductInCart from "../../components/ProductInCart";
import Button from "../../components/Button";
import BRLFormat from "../../components/BRLFormat";
import CarouselProducts from "../../components/CarouselProducts";
import { CategoriesClient } from "../../contexts/CategoriesClient";
import { CategoryProps } from "../../types/interfaces";
import SecondaryButton from "../../components/SecondaryButton";
import Link from "next/link";

const Cart = () => {
  const {
    productsCart,
    clearCart,
    submitForCheckout,
    quantityTotal,
    totalPriceCart,
  } = useContext(CartContext);

  const { categories } = useContext(CategoriesClient);

  const [suggestions, setSuggestions] = useState<CategoryProps[]>();

  useEffect(() => {
    const randomSuggestions = [...categories];

    for (let i = 0; i < randomSuggestions.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomSuggestions[i], randomSuggestions[j]] = [
        randomSuggestions[j],
        randomSuggestions[i],
      ];
    }
    setSuggestions(randomSuggestions);
  }, [categories]);

  return (
    <ContainerPage>
      <ContainerCart>
        {productsCart.length ? (
          <WrapperCart>
            <TextWrapper>
              <h1>Carrinho</h1>
              <p onClick={clearCart}>Limpar carrinho</p>
            </TextWrapper>
            {productsCart.map((product) => (
              <ProductInCart
                key={product.id}
                productSlug={product.slug}
                qtd={product.qtd}
                price={product.totalPrice}
              />
            ))}
            <InitiateCheckout>
              <p>
                Total({quantityTotal.total} itens):{" "}
                <span>
                  <BRLFormat value={totalPriceCart} />
                </span>
              </p>
              <Link href={{ pathname: "/" }} passHref>
                <SecondaryButton>Continuar comprando</SecondaryButton>
              </Link>
              <Button onClick={submitForCheckout}>Finalizar pedido</Button>
            </InitiateCheckout>
          </WrapperCart>
        ) : (
          <WrapperCart height={11}>
            <TextWrapper>
              <h1>Seu carrinho está vazio</h1>
              <Link href={{ pathname: "/" }} passHref>
                <SecondaryButton>Continuar comprando</SecondaryButton>
              </Link>
            </TextWrapper>
          </WrapperCart>
        )}
      </ContainerCart>
      <TextWrapper>
        <h2>Sugestões para o seu carrinho:</h2>
      </TextWrapper>
      {suggestions?.map((category) => (
        <CarouselProducts
          key={category.id}
          categoryId={category.id}
          categoryName={category.name}
        />
      ))}
    </ContainerPage>
  );
};

export default Cart;
