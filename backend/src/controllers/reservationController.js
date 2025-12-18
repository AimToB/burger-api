import {
  getReservations,
  createReservation,
} from "../services/reservationServices.js";

export async function getReservationsController(req, res, next) {
  try {
    const reservations = await getReservations();

    res.status(200).json(reservations);
  } catch (err) {
    console.log(err);
    next(err);
  }
}

export async function createReservationController(req, res, next) {
  try {
    // console.log(req.query.name);
    const { name, email, date, time, guests, note } = req.body;

    if (!name || !email || !date || !time || typeof guests !== "number") {
      return res.status(400).json({ error: "Invalid or missing data" });
    }

    const isoTime = new Date(`${date}T${time}`);

    if (isNaN(isoTime.getTime())) {
      return res.status(400).json({ error: "Invalid date or time format" });
    }

    const created = await createReservation({
      name,
      email,
      time: isoTime.toISOString(),
      guests,
      note,
    });
    res.status(201).json(created.id);
  } catch (err) {
    next(err);
  }
}
