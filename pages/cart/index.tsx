import { useContext } from "react";
import { CartContext } from "../../contexts/cart";
import ContainerPage from "../../components/ContainerPage";
import {
  ContainerCart,
  TextWrapper,
  WrapperCart,
} from "../../styles/pages/Cart";
import ProductInCart from "../../components/ProductInCart";

const Cart = () => {
  const { productsCart, clearCart } = useContext(CartContext);

  return (
    <ContainerPage color="#5d2d8c">
      <ContainerCart>
        <WrapperCart>
          {productsCart.length ? (
            <>
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
            </>
          ) : (
            <TextWrapper>
              <h1>Seu carrinho está vazio</h1>
            </TextWrapper>
          )}
        </WrapperCart>
      </ContainerCart>
    </ContainerPage>
  );
};

export default Cart;
