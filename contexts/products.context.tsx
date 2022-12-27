import { createContext, useState, useEffect } from "react";

import { ApolloError, gql, useQuery } from "@apollo/client";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: ICategoty;
  createdAt: string;
  updatedAt: string;
}

interface ICategoty {
  id: string;
  name: string;
}

interface ProductsContextInterface {
  products: IProduct[];
  loading: boolean;
  error: ApolloError;
}

export const ProductsContext = createContext<ProductsContextInterface | null>(
  null
);

const GET_PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      imageUrl
      description
      createdAt
      updatedAt
      category {
        id
        name
      }
    }
  }
`;

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  useEffect(() => {
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
