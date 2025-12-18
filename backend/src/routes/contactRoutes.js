import { Router } from "express";
import {
  contactInfoController,
  createMessageController,
} from "../controllers/contactController.js";

const router = Router();

router.get("/", contactInfoController);
router.post("/create", createMessageController);

export default router;
