import { createContext, ReactNode, useState } from "react";

interface IProductCart {
  id?: number | undefined | string;
  qtd: any;
}

interface ICartContext {
  productsCart: IProductCart[];
  setProductsCart: (newState: IProductCart[]) => void;
  addProductToCart: (productId: number | undefined | string) => void;
  removeProductToCart: (productId: number | undefined | string) => void;
  clearCart:()=>void
}

const initialValue = {
  productsCart: [],
  setProductsCart: () => {},
  addProductToCart: () => {},
  removeProductToCart: () => {},
  clearCart: ()=>{},
};

export const CartContext = createContext<ICartContext>(initialValue);

interface ICartContextProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ICartContextProps) {
  const [productsCart, setProductsCart] = useState<IProductCart[]>([]);

  const addProductToCart = (productId: number | undefined | string) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === productId);

    if (!item) {
      copyProductsCart.push({ id: productId, qtd: 1 });
    } else {
      item.qtd = item.qtd + 1;
    }

    setProductsCart(copyProductsCart);
  };

  const removeProductToCart = (productId: number | undefined | string) => {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.find((product) => product.id === productId);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      setProductsCart(copyProductsCart);
    } else {
      const arrayFiltered = copyProductsCart.filter(
        (product) => product.id !== productId
      );
      setProductsCart(arrayFiltered);
    }
  };

  const clearCart = () => {
    setProductsCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        productsCart,
        setProductsCart,
        addProductToCart,
        removeProductToCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
