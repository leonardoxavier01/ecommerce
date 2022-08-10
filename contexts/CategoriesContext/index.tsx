import { createContext, ReactNode, useEffect, useState } from "react";
import { CategoryProps } from "../../types/interfaces";

interface ICategoriesContext {
  categories: CategoryProps[];
  setCategories: (newState: CategoryProps[]) => void;
  newCategory: string;
  setNewCategory: (newState: string) => void;
  submitCategory: () => void;
  updateCategory: string;
  setUpdateCategory: (newState: string) => void;
  putCategory: (categoryId: string) => void;
  deleteCategory: (categoryId: string) => void;
}

const initialValue = {
  categories: [],
  setCategories: () => {},
  newCategory: "",
  setNewCategory: () => {},
  submitCategory: () => {},
  updateCategory: "",
  setUpdateCategory: () => {},
  putCategory: () => {},
  deleteCategory: () => {},
};

export const CategoriesContext =
  createContext<ICategoriesContext>(initialValue);

interface ICategoriesContextProps {
  children: ReactNode;
}

export function CategoriesContextProvider({
  children,
}: ICategoriesContextProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [newCategory, setNewCategory] = useState<string>("");
  const [updateCategory, setUpdateCategory] = useState<string>("");

  const getCategories = async () => {
    const response = await fetch("https://quiet-anchorage-15734.herokuapp.com/categories");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const submitCategory = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`https://quiet-anchorage-15734.herokuapp.com/admin/categories`, {
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

      const { category } = await response.json();

      setNewCategory("");
      setUpdateCategory(category.name);
      setCategories([...categories, category]);
    } else {
      alert("Houve um erro");
      setNewCategory("");
    }
  };

  const putCategory = async (categoryId: string) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://quiet-anchorage-15734.herokuapp.com/admin/categories/${categoryId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          name: updateCategory,
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
      const { category } = await response.json();

      const indexCategory = categories.findIndex((objct) => {
        return objct.id === categoryId;
      });

      if (indexCategory !== -1) {
        categories[indexCategory] = category;
        setCategories([...categories]);
      }
    } else {
      alert("Houve um erro");
    }
  };

  const deleteCategory = async (categoryId: string) => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `https://quiet-anchorage-15734.herokuapp.com/admin/categories/${categoryId}`,
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

      const indexCategoryDeleted = categories.findIndex((objct) => {
        return objct.id === categoryId;
      });

      if (indexCategoryDeleted !== -1) {
        categories.splice(indexCategoryDeleted, 1);
        setCategories([...categories]);
      }
    } else {
      alert("Houve um erro");
    }
  };

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        setCategories,
        newCategory,
        setNewCategory,
        submitCategory,
        updateCategory,
        setUpdateCategory,
        putCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
