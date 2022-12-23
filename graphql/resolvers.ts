import { Query } from "./resolvers/Query";
import { Product } from "./resolvers/Product";
import { Category } from "./resolvers/Category";
import { Review } from "./resolvers/Review";
import { Mutation } from "./resolvers/Mutation";

export const resolvers = {
  // Query Resolver
  Query: {
    hello: () => "Hello World!",
    products: (parent, args, ctx) => {
      return ctx.prisma.product.findMany();
    },
  },
};
