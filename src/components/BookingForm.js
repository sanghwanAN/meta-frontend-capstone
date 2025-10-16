import { useState } from "react";

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0] || "");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { date, time, guests, occasion };
    console.log("Booking submitted:", payload);
    alert(`Reserved: ${date} / ${time} for ${guests} guest(s), ${occasion}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="booking-form"
      style={{ display: "grid", gap: 20, maxWidth: 320 }}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title" style={{ marginBottom: 4 }}>
        Booking Details
      </h2>

      {/* 날짜 */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      {/* 시간 */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      {/* 인원 */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min={1}
        max={10}
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      {/* 목적(옵션) */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      <button type="submit" className="btn-primary">
        Confirm Reservation
      </button>
    </form>
  );
}
