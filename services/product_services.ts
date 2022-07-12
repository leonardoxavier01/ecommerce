import { API } from "./constants";

const find = async (categoryId: string | undefined) => {
  const responseCategory = await fetch(`${API}/categories/${categoryId}`);
  const categoryObject = await responseCategory.json();

  const responseProducts = await fetch(
    `${API}/categories/${categoryId}/products`
  );
  const productObject = await responseProducts.json();

  return {
    ...categoryObject,
    products: productObject,
  };
};

const defaultFunctions = { find };

export default defaultFunctions;
