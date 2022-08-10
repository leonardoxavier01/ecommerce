import type { NextPage } from "next";
import { AdminAuthProvider } from "../../../contexts/auth";
import {
  ContentCategory,
  TitleProductsPage,
} from "../../../styles/pages/AdminProducts";
import ProductsContextProvider from "../../../contexts/ProductsContext";
import ProductsRegistered from "../../../components/ProductsRegistered";
import RegisterProduct from "../../../components/RegisterProduct";
import Head from "next/head";

const ProductsPage: NextPage = () => {
  return (
    <AdminAuthProvider>
      <Head>
        <title>Gerenciar produtos</title>
      </Head>
      <ProductsContextProvider>
        <TitleProductsPage>Productos cadastrados:</TitleProductsPage>
        <ContentCategory>
          <ProductsRegistered />
          <RegisterProduct />
        </ContentCategory>
      </ProductsContextProvider>
    </AdminAuthProvider>
  );
};

export default ProductsPage;
