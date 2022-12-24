// import { v4 as uuidv4 } from "uuid";
// export const Mutation = {
//   createProduct: async (parent, { input }, context, info) => {
//     const { name, description, price, image, quantity, onSale, categoryId } =
//       input;
//     const { products } = context;
//     console.log("first", name);

//     const newProduct = {
//       id: uuidv4(),
//       name,
//       description: "ddfsdfsdf",
//       price: 100,
//       image: "dsfsdf",
//       quantity: 12,
//       onSale: false,
//       categoryId,
//     };
//     products.push(newProduct);
//     return newProduct;
//   },

//   createCategory: async (parent, { input }, context, info) => {
//     const { name } = input;

//     const { categories } = context;

//     const newCategory = {
//       id: uuidv4(),
//       name,
//     };
//     categories.push(newCategory);
//     return newCategory;
//   },
// };
