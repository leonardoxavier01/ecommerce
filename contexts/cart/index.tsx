import  Router  from "next/router";
import { createContext, ReactNode, useState } from "react";

interface IProductCart {
  id?: number | undefined | string;
  qtd: any;
  slug: string | undefined;
  price: number | undefined | any;
  totalPrice: number | undefined;
}

interface ICartContext {
  productsCart: IProductCart[];
  setProductsCart: (newState: IProductCart[]) => void;
  addProductToCart: (
    productId: number | undefined | string,
    productSlug: string | undefined,
    price: number | undefined
  ) => void;
  removeProductToCart: (productId: number | undefined | string) => void;
  clearCart: () => void;
  quantityTotal: any;
  submitForCheckout:()=> void
}

const initialValue = {
  productsCart: [],
  setProductsCart: () => {},
  addProductToCart: () => {},
  removeProductToCart: () => {},
  clearCart: () => {},
  quantityTotal: {},
  submitForCheckout:() => {}
};

export const CartContext = createContext<ICartContext>(initialValue);

interface ICartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ICartContextProps) {
  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);
  const [quantityTotal, setQuantityTotal] = useState({ total: 0 });

  const addProductToCart = (
    productId: number | undefined | string,
    productSLug: string | undefined,
    price: number | undefined
  ) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === productId);

    if (!item) {
      copyProductsCart.push({
        id: productId,
        slug: productSLug,
        price: price,
        totalPrice: price,
        qtd: 1,
      });
    } else {
      item.qtd = item.qtd + 1;
      item.totalPrice = item.price * item.qtd;
    }

    setQuantityTotal({ total: quantityTotal.total + 1 });
    setProductsCart(copyProductsCart);
  };

  const removeProductToCart = (productId: number | undefined | string) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === productId);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      item.totalPrice = item.price * item.qtd;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== productId
      );
      setProductsCart(arrayFiltered);
    }
    setQuantityTotal({ total: quantityTotal.total - 1 });
  };

  const clearCart = () => {
    setProductsCart([]);
    setQuantityTotal({ total: 0 });
  };

  const productsForCheckout = productsCart.map((item) => {
    const { id: productId, qtd: quantity } = item;

    return {
      productId,
      quantity,
    };
  });

  const submitForCheckout = async () => {
    const response = await fetch(
      `http://localhost:5000/create-checkout-session`,
      {
        method: "POST",
        body: JSON.stringify({ productsForCheckout }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Direcionando para pagina de pagamento");

      const data = await response.json();

      Router.push(data.data);
    } else {
      alert("Houve um erro por aqui. Tente novamente mais tarde");
    }
  };


  return (
    <CartContext.Provider
      value={{
        productsCart,
        setProductsCart,
        addProductToCart,
        removeProductToCart,
        clearCart,
        quantityTotal,
        submitForCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
