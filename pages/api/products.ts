import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  res.status(200).json(await prisma.product.findMany());
}
