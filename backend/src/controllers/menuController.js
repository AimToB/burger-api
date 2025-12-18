import { getMenu } from "../services/menuServices.js";

export async function menuController(req, res, next) {
  try {
    const category = req.query?.category || "";
    const items = await getMenu(category);

    res.status(200).json(Array.isArray(items) ? items : []);
  } catch (err) {
    console.log(err);
    next(err);
  }
}
