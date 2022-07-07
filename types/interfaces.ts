interface CategoryProps {
  name: string;
  products: ProductProps[];
  id: string;
  slug: string;
}

export interface HomeProps {
  categories: Array<CategoryProps>;
}

interface ProductProps {
  id: number;
  name: string;
  headline: string;
  description: string;
  slug: string;
  price: number;
  priceWithDiscount: number;
}

export interface ProductPageProps {
  product: ProductProps;
}

export interface CategoryPageProps {
  category: CategoryProps;
}
