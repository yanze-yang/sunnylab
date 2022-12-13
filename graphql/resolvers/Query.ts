import { products, categories } from "../db";

export const Query = {
  hello: () => [],
  products: () => products,
  product: (_: any, { id }: any) =>
    products.find((product) => product.id === id),
  categories: () => categories,
  category: (_, { id }) => {
    return categories.find((category) => category.id === id);
  },
};
