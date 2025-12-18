// Modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Misc
import { prisma } from "./config/db.js";
import { errorHandler } from "./middleware/error.js";

// Routes
import menuRoutes from "./routes/MenuRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import hoursRoutes from "./routes/hoursRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

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

// Routers
app.use("/api/menu", menuRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/hours", hoursRoutes);
app.use("/api/reservations", reservationRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Connected to backend successfully on port ${PORT}`);
});
