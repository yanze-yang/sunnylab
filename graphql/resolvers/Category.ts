export const Category = {
  products: (parent, { filter }, { products }) => {
    const categoryId = parent.id;
    if (!filter) return products;
    const { onSale } = filter;
    if (onSale) {
      return products.filter(
        (product) =>
          product.onSale === onSale && product.categoryId === parent.id
      );
    } else
      return products.filter((product) => product.categoryId === categoryId);
  },
};
