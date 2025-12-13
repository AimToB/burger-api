import { Router } from "express";
import { hoursController } from "../controllers/hoursController.js";

const router = Router();
router.get("/", hoursController);

export default router;
