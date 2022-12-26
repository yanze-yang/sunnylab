import { v4 as uuidv4 } from "uuid";

export const resolvers = {
  // Query Resolver
  Query: {
    hello: () => "Hello World!",
    products: async (parent, args, ctx) => {
      return await ctx.prisma.product.findMany();
    },
  },

  // Mutation Resolver
  Mutation: {
    createProduct: async (parent, args, ctx) => {
      const { name, description, price, imageUrl } = args.input;
      return await ctx.prisma.product.create({
        data: {
          id: uuidv4(),
          name,
          description,
          price,
          imageUrl,
        },
      });
    },

    updateProduct: async (parent, args, ctx) => {
      const { id, input } = args;

      try {
        await ctx.prisma.product.update({
          where: { id },
          data: input,
        });
      } catch (error) {
        console.log("error", error.message);
      }
    },

    removeProduct: async (parent, args, ctx) => {
      const { id } = args;
      return await ctx.prisma.product.delete({
        where: { id },
      });
    },
  },
};
