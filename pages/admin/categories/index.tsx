import { NextPage } from "next";
import { AdminAuthProvider } from "../../../contexts/auth";
import { TitleCategories } from "../../../styles/pages/AdminCategories";
import { CategoriesContextProvider } from "../../../contexts/CategoriesContext";
import CategoriesRegistered from "../../../components/CategoriesRegistered";
import RegisterCategory from "../../../components/RegisterCategory";
import Head from "next/head";

const Categories: NextPage = () => {
  return (
    <AdminAuthProvider>
      <Head>
        <title>Gerenciar categorias</title>
      </Head>
      <CategoriesContextProvider>
        <RegisterCategory />
        <TitleCategories>Categorias cadastradas:</TitleCategories>
        <CategoriesRegistered />
      </CategoriesContextProvider>
    </AdminAuthProvider>
  );
};

export default Categories;
