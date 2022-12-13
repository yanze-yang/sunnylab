export const Category = {
  products: (parent, { filter }, { products, reviews }) => {
    const { onSale, avgRating } = filter;

    if (onSale && avgRating) {
      const filteredProducts = products.filter(
        (product) =>
          product.onSale === onSale && product.categoryId === parent.id
      );
      const filteredProducts2 = filteredProducts.filter((product) => {
        const productReviews = reviews.filter(
          (review) => review.productId === product.id
        );
        const productAvgRating =
          productReviews.reduce((acc, review) => acc + review.rating, 0) /
          productReviews.length;
        return productAvgRating >= avgRating;
      });
      return filteredProducts2;
    } else if (onSale) {
      const filteredProducts = products.filter(
        (product) =>
          product.onSale === onSale && product.categoryId === parent.id
      );
      return filteredProducts;
    } else if (avgRating) {
      const filteredProducts = products.filter(
        (product) => product.categoryId === parent.id
      );
      const filteredProducts2 = filteredProducts.filter((product) => {
        const productReviews = reviews.filter(
          (review) => review.productId === product.id
        );
        const productAvgRating =
          productReviews.reduce((acc, review) => acc + review.rating, 0) /
          productReviews.length;
        return productAvgRating >= avgRating;
      });
      return filteredProducts2;
    } else {
      return products.filter((product) => product.categoryId === parent.id);
    }
  },
};
