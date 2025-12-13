import { prisma } from "../config/db.js";
import {
  getContactInfo,
  createContactMessage,
} from "../services/contactServices.js";

export async function contactInfoController(req, res, next) {
  try {
    const info = await getContactInfo();
    res.status(200).json(info);
  } catch (err) {
    next(err);
  }
}

export async function createMessageController(req, res, next) {
  try {
    const { name, email, message } = req.body;
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        error: "Name, email, message required!",
      });
    }
    await createContactMessage({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(200).json({
      msg: "Created Message Successfully",
    });
  } catch (err) {
    next(err);
  }
}
