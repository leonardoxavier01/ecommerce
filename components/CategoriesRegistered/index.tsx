import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { ContainerList } from "./styles";
import CategoryRegistered from "../CategoryRegistered";

const CategoriesRegistered: React.FC = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <ContainerList>
      {categories.map((category) => (
        <CategoryRegistered key={category.id} category={category} />
      ))}
    </ContainerList>
  );
};

export default CategoriesRegistered;
