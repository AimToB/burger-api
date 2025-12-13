import { prisma } from "../config/db.js";

export async function getMenu(category) {
  const where = { isActive: true };
  if (category === "BURGER" || category === "SIDE" || category === "DRINK") {
    where.category = category;
  }

  const data = await prisma.menuItem.findMany({
    where,
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });

  return data;
}
