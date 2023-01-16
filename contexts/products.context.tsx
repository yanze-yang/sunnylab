import { createContext, useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

export const ProductsContext = createContext({
  products: [],
  loading: false,
  error: null,
});

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      imageUrl
      description
      categoryId
      category {
        id
        name
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const value = { products, loading, error };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
