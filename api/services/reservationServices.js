import { prisma } from "../config/db.js";

export async function getReservations() {
  return prisma.reservation.findMany();
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
