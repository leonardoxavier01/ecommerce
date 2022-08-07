import { NextPage } from "next";
import { AdminAuthProvider } from "../../../contexts/auth";
import { TitleCategories } from "../../../styles/pages/AdminCategories";
import { CategoriesContextProvider } from "../../../contexts/CategoriesContext";
import CategoriesRegistered from "../../../components/CategoriesRegistered";
import RegisterCategory from "../../../components/RegisterCategory";

const Categories: NextPage = () => {
  return (
    <AdminAuthProvider>
      <CategoriesContextProvider>
        <RegisterCategory />
        <TitleCategories>Categorias cadastradas:</TitleCategories>
        <CategoriesRegistered />
      </CategoriesContextProvider>
    </AdminAuthProvider>
  );
};

export default Categories;
