import { objectType, queryType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.id("id");
    t.string("name");
    t.float("price");
    t.string("imageUrl");
    t.string("description");
    t.field("category", {
      type: Category,
      resolve: (parent, args, ctx) => {
        return ctx.prisma.product
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .category();
      },
    });
    t.string("createdAt");
    t.string("updatedAt");
  },
});

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.id("id");
    t.string("name");
    t.list.field("products", {
      type: Product,
      resolve: (parent, args, ctx) => {
        return ctx.prisma.category

          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .products();
      },
    });
    t.string("createdAt");
    t.string("updatedAt");
  },
});

export const Query = queryType({
  definition(t) {
    t.list.field("products", {
      type: "Product",
      resolve: (parent, args, ctx) => {
        return ctx.prisma.product.findMany();
      },
    });
    t.list.field("categories", {
      type: "Category",
      resolve: (parent, args, ctx) => {
        return ctx.prisma.category.findMany();
      },
    });
  },
});
