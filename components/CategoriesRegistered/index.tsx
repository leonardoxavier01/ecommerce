import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { BoxButton, ContainerCategory, WrapperCategory } from "./styles";
import Link from "next/link";
import CategoryModalDel from "../CategoryModalDel";
import CategoryModalPut from "../CategoryModalPut";

const CategoriesRegistered: React.FC = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        width: "100%",
      }}
    >
      {categories.map((category) => (
        <ContainerCategory key={category.id}>
          <WrapperCategory>
            <p>{category.name}</p>
            <span>Id: {category.id}</span>
            <Link
              href={{
                pathname: "/admin/products/[id]",
                query: { id: category.id },
              }}
              passHref
            >
              Ver produtos
            </Link>
          </WrapperCategory>
          <BoxButton>
            <CategoryModalPut
              categoryId={category.id}
              categoryName={category.name}
            />
            <CategoryModalDel
              categoryId={category.id}
              categoryName={category.name}
            />
          </BoxButton>
        </ContainerCategory>
      ))}
    </div>
  );
};

export default CategoriesRegistered;
