import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    categories: [Category!]!
  }

  type Mutation {
    createProduct(input: AddProductInput!): Product!
    updateProduct(id: ID!, input: AddProductInput!): Product!
    removeProduct(id: ID!): Product!
  }

  input AddProductInput {
    name: String!
    price: Float!
    imageUrl: String!
    description: String!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    imageUrl: String!
    description: String!
    category: Category
    categoryId: String
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
    createdAt: String!
    updatedAt: String!
  }
`;
