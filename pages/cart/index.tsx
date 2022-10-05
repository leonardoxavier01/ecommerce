import { useContext } from "react";
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

const Cart = () => {
  const {
    productsCart,
    clearCart,
    submitForCheckout,
    quantityTotal,
    totalPriceCart,
  } = useContext(CartContext);

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
              <InitiateCheckout>
                <p>
                  Total({quantityTotal.total} itens):{" "}
                  <span>
                    <BRLFormat value={totalPriceCart} />
                  </span>
                </p>
                <Button onClick={submitForCheckout}>Finalizar pedido</Button>
              </InitiateCheckout>
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
