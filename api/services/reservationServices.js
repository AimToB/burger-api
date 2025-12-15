import { prisma } from "../config/db.js";

export async function getReservations(name) {
  if (!name) {
    return prisma.reservation.findMany();
  }
  return prisma.reservation.findMany({
    where: {
      name: name,
    },
  });
}

export async function createReservation({
  name,
  email,
  time,
  guests,
  note = "No Note",
}) {
  return prisma.reservation.create({
    data: {
      name,
      email,
      time,
      guests,
      note,
    },
  });
}
