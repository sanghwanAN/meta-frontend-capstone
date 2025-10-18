/* global fetchAPI, submitAPI */
import { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // ✅ 날짜 변경 시 availableTimes 갱신
  const handleDateChange = (value) => {
    setDate(value);
    dispatch({ type: "UPDATE_TIMES", payload: new Date(value) });
  };

  // ✅ 모든 입력 필드가 올바르게 채워졌는지 검사
  useEffect(() => {
    const valid =
      date.trim() !== "" &&
      time.trim() !== "" &&
      occasion.trim() !== "" &&
      guests >= 1 &&
      guests <= 10;
    setIsFormValid(valid);
  }, [date, time, guests, occasion]);

  // ✅ 제출 이벤트
  const handleSubmit = (e) => {
    if (!isFormValid) return;
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "250px", gap: "20px" }}
      className="booking-form"
    >
      {/* 날짜 선택 */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />

      {/* 시간 선택 */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      {/* 인원 수 입력 */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        required
      />

      {/* 이벤트 종류 */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Other</option>
      </select>

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="btn-primary"
        disabled={!isFormValid}
        aria-label="Confirm reservation on click"
      >
        Confirm Reservation
      </button>

      {/* 비활성화 안내 메시지 */}
      {!isFormValid && (
        <small style={{ color: "gray" }}>
          Please fill out all fields before confirming.
        </small>
      )}
    </form>
  );
}
