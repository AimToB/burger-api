import { getHours } from "../services/hourServices.js";

export async function hoursController(req, res, next) {
  try {
    res.json(await getHours());
    res.status(200).json({
      ok: "true",
    });
  } catch (err) {
    console.err(err);
    next(err);
  }
}
