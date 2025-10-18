export function validateBooking({ date, time, guests, occasion }) {
  const hasRequired =
    typeof date === "string" &&
    date.trim() !== "" &&
    typeof time === "string" &&
    time.trim() !== "" &&
    typeof occasion === "string" &&
    occasion.trim() !== "";

  const guestsNum = Number(guests);
  const guestsValid =
    Number.isFinite(guestsNum) && guestsNum >= 1 && guestsNum <= 10;

  return hasRequired && guestsValid;
}
