import React, { createContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { ProductProps } from "../../types/interfaces";

interface IProdcutsContext {
  categoryId: string | undefined;
  products: ProductProps[];
  setProducts: (newState: ProductProps[]) => void;
  renderForm: (field: string, value: string | number) => void;
  submitProduct: (event: React.FormEvent<HTMLFormElement>) => void;
  submitUpdateProduct: (productId: string) => void;
  handleDeleteProduct: (productId: string | number | undefined) => void;
}

const initialValue = {
  categoryId: undefined,
  products: [],
  setProducts: () => {},
  renderForm: () => {},
  renderFormUpdate: () => {},
  submitProduct: () => {},
  submitUpdateProduct: () => {},
  handleDeleteProduct: () => {},
};

export const ProductsContext = createContext<IProdcutsContext>(initialValue);

interface IProductsContextProps {
  children: React.ReactNode;
}

interface IFormProduct {
  name: string;
  headline: string;
  description: string;
  price: number;
  priceWithDiscount: number;
  [key: string]: string | number | undefined | null;
}

export default function ProductsContextProvider({
  children,
}: IProductsContextProps) {
  const [products, setProducts] = useState<ProductProps[]>([]);

  const router = useRouter();
  const categoryId = router.query.id?.toString();

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        `http://localhost:5000/categories/${categoryId}/products`
      );
      const data = await response.json();
      setProducts(data);
    };
    getProducts();
  }, [categoryId]);

  const form: any = useMemo(() => {
    return {};
  }, []);

  const renderForm = (field: string, value: string | number) => {
    form[field] = value;
  };

  const submitProduct = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    const product = {
      image: null,
      categoryId,
      ...form,
    };

    const response = await fetch(
      `http://localhost:5000/admin/categories/${categoryId}/products`,
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const { product } = await response.json();
      setProducts([...products, product]);

      alert("Produto criado");
    } else {
      alert("Houve um erro");
    }
  };

  const submitUpdateProduct = async (
    productId: number | undefined | string
  ) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/admin/products/${productId}`,
      {
        method: "PUT",
        body: JSON.stringify({ ...form }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const { product } = await response.json();

      const indexProduct = products.findIndex((objct) => {
        return objct.id === productId;
      });

      if (indexProduct !== -1) {
        products[indexProduct] = product;
        setProducts([...products]);
      }

      alert("Produto alterado");
    } else {
      alert("Houve um erro");
    }
  };

  const handleDeleteProduct = async (
    productId: string | number | undefined
  ) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/admin/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const indexProdcutDeleted = products.findIndex((objct) => {
        return objct.id === productId;
      });

      if (indexProdcutDeleted !== -1) {
        products.splice(indexProdcutDeleted, 1);
        setProducts([...products]);
      }

      alert("Produto excluído");
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        categoryId,
        products,
        setProducts,
        renderForm,
        submitProduct,
        submitUpdateProduct,
        handleDeleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
