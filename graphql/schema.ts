import { gql } from "apollo-server-micro";
import { makeSchema } from "nexus";
import { objectType, queryType } from "nexus";
import { join } from "path";

// export const typeDefs = gql`
//   type Query {
//     hello: String
//     products: [Product!]!
//     categories: [Category!]!
//   }

//   type Mutation {
//     createProduct(input: AddProductInput!): Product!
//     updateProduct(id: ID!, input: AddProductInput!): Product!
//     removeProduct(id: ID!): Product!
//   }

//   input AddProductInput {
//     name: String!
//     price: Float!
//     imageUrl: String!
//     description: String!
//   }

//   type Product {
//     id: ID!
//     name: String!
//     price: Float!
//     imageUrl: String!
//     description: String!
//     category: Category!
//     createdAt: String!
//     updatedAt: String!
//   }

//   type Category {
//     id: ID!
//     name: String!
//     products: [Product!]!
//     createdAt: String!
//     updatedAt: String!
//   }
// `;
