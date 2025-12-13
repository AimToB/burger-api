import { prisma } from "../config/db.js";

export async function getContactInfo() {
  return prisma.contactInfo.findFirst();
}

export async function createContactMessage({ name, email, message }) {
  return prisma.contactMessage.create({
    data: {
      name,
      email,
      message,
    },
  });
}
