export const Query = {
  hello: () => "Hello World!",
  products: (_, { filter }, { products, reviews }) => {
    const { onSale, avgRating } = filter;
    if (onSale) {
      const filteredProducts = products.filter(
        (product) => product.onSale === onSale
      );
      return filteredProducts;
    }

    if (avgRating) {
      const filteredProducts = products.filter((product) => {
        const productReviews = reviews.filter(
          (review) => review.productId === product.id
        );
        const productAvgRating =
          productReviews.reduce((acc, review) => acc + review.rating, 0) /
          productReviews.length;
        return productAvgRating >= avgRating;
      });

      return filteredProducts;
    }

    if (onSale && avgRating) {
      const filteredProducts = products.filter(
        (product) => product.onSale === onSale
      );
      console.log("first", filteredProducts);
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
    }

    return products.filter((product) => product.onSale === onSale);
  },
  product: (_, { id }, { products }) =>
    products.find((product) => product.id === id),
  categories: (_, __, { categories }) => categories,
  category: (_, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  },
  review: (_, { id }, { reviews }) => {
    return reviews.find((review) => review.id === id);
  },
};
