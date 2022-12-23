import { createContext, useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const GET_PRODUCTS = gql`
    query Query {
      products {
        createdAt
        description
        id
        name
        price
        updatedAt
        imageUrl
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
