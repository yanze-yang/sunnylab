import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String
    products(filter: ProductInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
    review(id: ID!): Review
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    image: String!
    description: String!
    quantity: Int!
    onSale: Boolean!
    category: Category!
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String!
    title: String!
    rating: Int!
    comment: String!
  }

  input ProductInput {
    onSale: Boolean
    avgRating: Int
  }
`;
