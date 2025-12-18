import { Router } from "express";
import {
  createReservationController,
  getReservationsController,
} from "../controllers/reservationController.js";

const router = Router();

router.get("/", getReservationsController);
router.post("/create", createReservationController);

export default router;
