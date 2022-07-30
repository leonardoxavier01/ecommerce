import React, { MouseEventHandler, useEffect, useState } from "react";
import { NextPage } from "next";
import { CategoryProps } from "../../../types/interfaces";
import { AdminAuthProvider } from "../../../contexts/auth";
import {
  ContainerInputLogout,
  ContainerCategory,
  WrapperCategory,
  ContainerModal,
  StyledModal,
  ButtonDelete,
  ContainerInput,
  TitleCategories,
} from "../../../styles/pages/admin/categories";
import { IoMdAddCircle } from "react-icons/io";
import Logout from "../../../components/Logout";
import Input from "../../../components/Input";
import Link from "next/link";

interface modal {
  categoryId: string;
  categoryName: string;
}

const ModalDelete = (props: modal) => {
  const [isDelete, setIsDelete] = useState<boolean>(false);

  const deleteCategory = async (categoryId: string) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/admin/categories/${categoryId}`,
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
      alert("Categoria excluída");
      console.log(response);
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <div>
      {isDelete ? (
        <ContainerModal>
          <StyledModal>
            <p>Todos os produtos desta categoria também serão deletados!</p>
            <p>
              Tem certeza de que deseja excluir a categoria
              <strong> {props.categoryName}</strong> permanentemente?
            </p>
            <ButtonDelete onClick={() => setIsDelete(false)}>
              Cancelar
            </ButtonDelete>
            <ButtonDelete onClick={() => deleteCategory(props.categoryId)}>
              Deletar
            </ButtonDelete>
          </StyledModal>
        </ContainerModal>
      ) : (
        <ButtonDelete onClick={() => setIsDelete(true)}>
          Deletar categoria
        </ButtonDelete>
      )}
    </div>
  );
};

const Categories: NextPage = () => {
  const [addCategory, setAddCategory] = useState<string>();
  const [category, setCategory] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((resp) => resp.json())
      .then((data) => setCategory(data));
  }, [category]);

  const submitCategory = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:5000/admin/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: addCategory,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      alert("Categoria criada");
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <AdminAuthProvider>
      <ContainerInputLogout>
        <Logout />
        <ContainerInput>
          <Input
            placeholder="Criar nova categoria"
            type="text"
            value={addCategory}
            onChange={(e: any) => setAddCategory(e.target.value)}
          />
          <button onClick={submitCategory}>
            <IoMdAddCircle size={40}></IoMdAddCircle>
          </button>
        </ContainerInput>
      </ContainerInputLogout>
      <TitleCategories>Categorias cadastradas:</TitleCategories>
      {category.map((category) => (
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
          <ModalDelete categoryId={category.id} categoryName={category.name} />
        </ContainerCategory>
      ))}
    </AdminAuthProvider>
  );
};

export default Categories;
