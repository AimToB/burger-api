import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.menuItem.createMany({
    data: [
      {
        name: "Classic Smash",
        description: "Cheddar, pickles, house sauce",
        price: 9.9,
        category: "BURGER",
      },
      {
        name: "Double Trouble",
        description: "Double patty, double cheese",
        price: 12.9,
        category: "BURGER",
      },
      {
        name: "Fries",
        description: "Crispy, salted",
        price: 3.9,
        category: "SIDE",
      },
      {
        name: "Cola",
        description: "Cold and fizzy",
        price: 2.5,
        category: "DRINK",
      },
    ],
  });

  await prisma.contactInfo.create({
    data: {
      address: "123 Burger St, Prague",
      phone: "+420 777 000 000",
      email: "hello@burgerplace.com",
      mapUrl: "https://maps.google.com/?q=Prague",
    },
  });

  await prisma.openingHours.createMany({
    data: [
      { day: "Mon", openTime: "11:00", closeTime: "22:00", isClosed: false },
      { day: "Tue", openTime: "11:00", closeTime: "22:00", isClosed: false },
      { day: "Wed", openTime: "11:00", closeTime: "22:00", isClosed: false },
      { day: "Thu", openTime: "11:00", closeTime: "22:00", isClosed: false },
      { day: "Fri", openTime: "11:00", closeTime: "23:00", isClosed: false },
      { day: "Sat", openTime: "12:00", closeTime: "23:00", isClosed: false },
      { day: "Sun", openTime: "12:00", closeTime: "21:00", isClosed: false },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
