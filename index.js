// Modules
import express from "express";
import chalk from "chalk";
import cors from "cors";
import dotenv from "dotenv";

// Misc
import { prisma } from "./api/config/db.js";
import { errorHandler } from "./api/middleware/error.js";

// Routes
import menuRoutes from "./api/routes/MenuRoutes.js";
import contactRoutes from "./api/routes/contactRoutes.js";
import hoursRoutes from "./api/routes/hoursRoutes.js";
import reservationRoutes from "./api/routes/reservationRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "Success!",
    msg: "Connected successfully!",
  });
});

app.get("/health/db", async (req, res) => {
  try {
    // simplest possible DB round-trip
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      ok: true,
      db: "connected",
    });
  } catch (err) {
    console.error("DB health check failed:", err);
    res.status(500).json({
      ok: false,
      db: "disconnected",
      error: err.message,
    });
  }
});

// Routers
app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/hours", hoursRoutes);
app.use("/api/reservations", reservationRoutes);

const server = app.listen(PORT, () => {
  console.log(chalk.green(`Connected to the server on PORT: ${PORT}!`));
});

app.use(errorHandler);
