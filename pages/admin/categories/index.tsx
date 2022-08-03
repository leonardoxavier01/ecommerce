import React, { useContext, useEffect, useState } from "react";
import { NextPage } from "next";
import { CategoryProps } from "../../../types/interfaces";
import { AdminAuthProvider } from "../../../contexts/auth";
import {
  ContainerInputLogout,
  ContainerCategory,
  WrapperCategory,
  BoxButton,
  Button,
  ContainerInput,
  TitleCategories,
} from "../../../styles/pages/AdminCategories";
import { IoMdAddCircle } from "react-icons/io";
import Logout from "../../../components/Logout";
import Input from "../../../components/Input";
import Link from "next/link";
import Modal from "../../../components/Modal";
import Router from "next/router";
import {
  CategoriesContext,
  CategoriesContextProvider,
} from "../../../contexts/CategoriesContext";

interface IModal {
  categoryId: string;
  categoryName: string;
}

const ButtonModalDel: React.FC<IModal> = ({
  categoryId,
  categoryName,
}: IModal) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const { deleteCategory } = useContext(CategoriesContext);

  const handleDeleteCategoy = () => {
    deleteCategory(categoryId);
    setIsDelete(false);
  };

  return (
    <>
      {isDelete ? (
        <Modal>
          <p>Todos os produtos desta categoria também serão deletados!</p>
          <p>
            Tem certeza de que deseja excluir a categoria
            <strong> {categoryName}</strong> permanentemente?
          </p>
          <Button onClick={() => setIsDelete(false)}>Cancelar</Button>
          <Button color="red" onClick={handleDeleteCategoy}>
            Deletar
          </Button>
        </Modal>
      ) : (
        <Button color="red" onClick={() => setIsDelete(true)}>
          Deletar categoria
        </Button>
      )}
    </>
  );
};

const ButtonModalPut: React.FC<IModal> = ({ categoryId }: IModal) => {
  const [isPut, setIsPut] = useState<boolean>(false);

  const { updateCategory, setUpdateCategory, putCategory } =
    useContext(CategoriesContext);

  const handlePutCategory = () => {
    putCategory(categoryId);
    setIsPut(false);
  };

  return (
    <>
      {isPut ? (
        <Modal>
          <p>Digite o novo nome desta categoria:</p>
          <Input
            type="text"
            value={updateCategory}
            onChange={(e: any) => setUpdateCategory(e.target.value)}
          />
          <Button onClick={() => setIsPut(false)}>Cancelar</Button>
          <Button color="#2cdb46" onClick={handlePutCategory}>
            Alterar
          </Button>
        </Modal>
      ) : (
        <Button color="#2cdb46" onClick={() => setIsPut(true)}>
          Alterar nome
        </Button>
      )}
    </>
  );
};

const RegisterCategory: React.FC = () => {
  const { newCategory, setNewCategory, submitCategory } =
    useContext(CategoriesContext);

  return (
    <ContainerInputLogout>
      <Logout />
      <ContainerInput>
        <Input
          placeholder="Criar nova categoria"
          type="text"
          value={newCategory}
          onChange={(e: any) => setNewCategory(e.target.value)}
        />
        <button onClick={submitCategory}>
          <IoMdAddCircle size={40} />
        </button>
      </ContainerInput>
    </ContainerInputLogout>
  );
};

const CategoriesRegistered: React.FC = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <>
      {categories.map((category: CategoryProps) => (
        <ContainerCategory key={category.id}>
          <WrapperCategory>
            <p>{category.name}</p>
            <span>Id: {category.id}</span>
            <Link
              href={{
                pathname: "/admin/categories/[id]",
                query: { id: category.id },
              }}
              passHref
            >
              <button>Ver produtos</button>
            </Link>
          </WrapperCategory>
          <BoxButton>
            <ButtonModalPut
              categoryId={category.id}
              categoryName={category.name}
            />
            <ButtonModalDel
              categoryId={category.id}
              categoryName={category.name}
            />
          </BoxButton>
        </ContainerCategory>
      ))}
    </>
  );
};

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
