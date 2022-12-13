import { categories } from "../db";

export const Product = {
  category: ({ categoryId }, args, context) => {
    return categories.find((category) => category.id === categoryId);
  },
};
