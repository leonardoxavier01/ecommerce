import { createContext, ReactNode, useEffect, useState } from "react";
import { baseUrl } from "../../services/baseUrl";
import { CategoryProps } from "../../types/interfaces";

interface ICategoriesClient {
  categories: CategoryProps[];
}

const initialValue = {
  categories: [],
};

export const CategoriesClient = createContext<ICategoriesClient>(initialValue);

interface ICategoriesClientProps {
  children: ReactNode;
}

export function CategoriesClientProvider({ children }: ICategoriesClientProps) {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const getCategories = async () => {
    const response = await fetch(`${baseUrl}/categories`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesClient.Provider
      value={{
        categories,
      }}
    >
      {children}
    </CategoriesClient.Provider>
  );
}
