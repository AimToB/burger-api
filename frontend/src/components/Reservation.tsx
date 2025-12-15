"use client";

import { useState } from "react";

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // later: send to API
    console.log("Reservation:", form);

    // optional reset
    setForm({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "2",
      note: "",
    });
  };

  return (
    <section className="reservation-section" id="reservations">
      <h2>Reserve a table</h2>
      <p>We’ll save you a seat. Just tell us when.</p>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />

          <select name="guests" value={form.guests} onChange={handleChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <textarea
          name="note"
          placeholder="Anything we should know? (optional)"
          rows={3}
          value={form.note}
          onChange={handleChange}
        />

        <button type="submit" className="cta">
          Book table
        </button>
      </form>
    </section>
  );
}
