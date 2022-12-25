import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const products = [
  {
    id: "53a0724c-a416-4cac-ae45-bfaedce1f147",
    name: "Steel Pot",
    description: "Silver steel pot that is perfect for cooking",
    // quantity: 230,
    price: 42.44,
    imageUrl: "img-1",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6",
    name: "Salad Bowl",
    description: "Round wooden bowl perfect for tossing and making salads",
    // quantity: 33,
    price: 53.5,
    imageUrl: "img-2",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1",
    name: "Spoon",
    description: "Small and delicate spoon",
    // quantity: 4266,
    price: 1.33,
    imageUrl: "img-3",

    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "404daf2a-9b97-4b99-b9af-614d07f818d7",
    name: "Shovel",
    description: "Grey rounded shovel for digging",
    // quantity: 753,
    price: 332,
    imageUrl: "img-4",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "6379c436-9fad-4b3f-a427-2d7241f5c1b1",
    name: "Fertilizer",
    description: "Nitrogen based fertitlizer",
    // quantity: 53453,
    price: 23.11,
    imageUrl: "img-5",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "f01bcdec-6783-464e-8f9e-8416830f7569",
    name: "Basketball",
    description: "Outdoor or indoor basketball",
    // quantity: 128,
    price: 59.99,
    imageUrl: "img-6",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "a4824a31-5c83-42af-8c1b-6e2461aae1ef",
    name: "Golf Clubs",
    description: "Good for golfing",
    // quantity: 3,
    price: 427.44,
    imageUrl: "img-7",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "b553085a-a7e0-4c9b-8a12-f971919c3683",
    name: "Baseball Gloves",
    description: "Professional catcher gloves",
    // quantity: 745,
    price: 77.0,
    imageUrl: "img-8",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
  {
    id: "47bf3941-9c8b-42c0-9c72-7f3985492a5b",
    name: "Soccer Ball",
    description: "Round ball",
    // quantity: 734,
    price: 93.44,
    imageUrl: "img-9",
    categoryId: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
  },
];

export const categories = [
  {
    id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70",
    name: "Kitchen",
  },
  {
    id: "34115aac-0ff5-4859-8f43-10e8db23602b",
    name: "Garden",
  },
  {
    id: "d914aec0-25b2-4103-9ed8-225d39018d1d",
    name: "Sports",
  },
];

async function main() {
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.product.createMany({
    data: products,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
