import { memo } from "react";
import { BoxButton, ContainerCategory, WrapperCategory } from "./styles";
import Link from "next/link";
import CategoryModalDel from "../CategoryModalDel";
import CategoryModalPut from "../CategoryModalPut";

interface IRegisteredProps {
  id: string;
  name: string;
}

const CategoryRegistered = (props: { category: IRegisteredProps }) => {
  const category = props.category;

  return (
    <ContainerCategory>
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
  );
};

export default memo(CategoryRegistered);
