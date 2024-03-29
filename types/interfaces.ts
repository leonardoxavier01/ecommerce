export interface CategoryProps {
  name: string;
  products: ProductProps[];
  id: string;
  slug: string;
}

export interface HomeProps {
  categories: Array<CategoryProps>;
}

export interface ProductProps {
  id?: string | number;
  name: string;
  headline?: string;
  description?: string;
  slug: string;
  price: number;
  priceWithDiscount: number;
  categoryId?: string;
  image?: string | undefined;
}

export interface ProductPageProps {
  product: ProductProps;
}

export interface CategoryPageProps {
  category: CategoryProps;
}

export interface ItemForStripe {
  productId: string | number | undefined;
  quantity: number | undefined;
}
