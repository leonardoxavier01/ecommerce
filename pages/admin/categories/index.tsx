import React, { useEffect, useState } from "react";
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
} from "../../../styles/pages/admin/categories";
import { IoMdAddCircle } from "react-icons/io";
import Logout from "../../../components/Logout";
import Input from "../../../components/Input";
import Link from "next/link";
import Modal from "../../../components/Modal";
import Router from "next/router";

interface modal {
  categoryId: string;
  categoryName: string;
}

const ButtonModalDel = (props: modal) => {
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
      Router.reload();
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <>
      {isDelete ? (
        <Modal>
          <p>Todos os produtos desta categoria também serão deletados!</p>
          <p>
            Tem certeza de que deseja excluir a categoria
            <strong> {props.categoryName}</strong> permanentemente?
          </p>
          <Button onClick={() => setIsDelete(false)}>Cancelar</Button>
          <Button color="red" onClick={() => deleteCategory(props.categoryId)}>
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

const ButtonModalPut = (props: modal) => {
  const [putCategory, setPutCategory] = useState<string>(props.categoryName);
  const [isPut, setIsPut] = useState<boolean>(false);

  const editCategory = async (categoryId: string) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://localhost:5000/admin/categories/${categoryId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: putCategory,
        }),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      alert("Categoria alterada");
      setIsPut(false);
      Router.reload();
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <>
      {isPut ? (
        <Modal>
          <p>Digite o novo nome desta categoria:</p>
          <Input
            type="text"
            value={putCategory}
            onChange={(e: any) => setPutCategory(e.target.value)}
          />
          <Button onClick={() => setIsPut(false)}>Cancelar</Button>
          <Button
            color="#2cdb46"
            onClick={() => editCategory(props.categoryId)}
          >
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

const Categories: NextPage = () => {
  const [newCategory, setNewCategory] = useState<string>("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const submitCategory = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:5000/admin/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: newCategory,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      alert("Categoria criada");
      setNewCategory("");
      const { category } = await response.json();
      setCategories([...categories, category]);
    } else {
      alert("Houve um erro");
      setNewCategory("");
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
            value={newCategory}
            onChange={(e: any) => setNewCategory(e.target.value)}
          />
          <button onClick={submitCategory}>
            \
            <IoMdAddCircle size={40} />
          </button>
        </ContainerInput>
      </ContainerInputLogout>
      <TitleCategories>Categorias cadastradas:</TitleCategories>
      {categories.map((category) => (
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
    </AdminAuthProvider>
  );
};

export default Categories;
