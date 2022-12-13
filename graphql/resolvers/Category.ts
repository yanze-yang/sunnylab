import { categories, products } from "../db";

export const Category = {
  products: (parent, args, context) => {
    const categoryId = parent.id;
    return products.filter((product) => product.categoryId === categoryId);
  },
};
