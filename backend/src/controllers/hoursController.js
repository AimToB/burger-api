import { getHours } from "../services/hourServices.js";

export async function hoursController(req, res, next) {
  try {
    const hours = await getHours();

    res.status(200).json(hours);
  } catch (err) {
    console.log(err);
    next(err);
  }
}
