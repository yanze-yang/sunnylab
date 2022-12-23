import { gql } from "apollo-server-express";

// export const typeDefs = gql`
//   type Query {
//     hello: String
//     products(filter: ProductFilterInput): [Product!]!
//     product(id: ID!): Product
//     categories: [Category!]!
//     category(id: ID!): Category
//     review(id: ID!): Review
//   }

//   type Mutation {
//     createProduct(input: AddProductInput!): Product!
//     createCategory(input: AddCategoryInput): Category!
//     createReview(
//       title: String!
//       rating: Int!
//       comment: String!
//       productId: ID!
//     ): Review!
//   }

//   type Product {
//     id: ID!
//     name: String!
//     price: Float!
//     image: String!
//     description: String!
//     quantity: Int!
//     onSale: Boolean!
//     category: Category!
//     reviews: [Review!]!
//   }

//   type Category {
//     id: ID!
//     name: String!
//     products(filter: ProductFilterInput): [Product!]!
//   }

//   type Review {
//     id: ID!
//     date: String!
//     title: String!
//     rating: Int!
//     comment: String!
//   }

//   input ProductFilterInput {
//     onSale: Boolean
//     avgRating: Int
//   }

//   input AddCategoryInput {
//     name: String!
//   }

//   input AddProductInput {
//     name: String!
//     # price: Float!
//     # image: String!
//     # description: String!
//     # quantity: Int!
//     # onSale: Boolean!
//     categoryId: String!
//   }

//   interface Book {
//     title: String
//   }

//   type ChildBook implements Book {
//     description: String
//   }
// `;

export const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    imageUrl: String!
    description: String!
    createdAt: String!
    updatedAt: String!
  }
`;
