import { prisma } from "../config/db.js";

export async function getHours() {
  return prisma.openingHours.findMany();
}
