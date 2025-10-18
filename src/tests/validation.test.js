/**
 * @jest-environment jsdom
 */
import { validateBooking } from "../utils/validation";

describe("validateBooking()", () => {
  test("returns true for a valid booking", () => {
    const ok = validateBooking({
      date: "2025-10-17",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    });
    expect(ok).toBe(true);
  });

  test("invalid when date missing", () => {
    const ok = validateBooking({
      date: "",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    });
    expect(ok).toBe(false);
  });

  test("invalid when time missing", () => {
    const ok = validateBooking({
      date: "2025-10-17",
      time: "",
      guests: 2,
      occasion: "Birthday",
    });
    expect(ok).toBe(false);
  });

  test("invalid when occasion missing", () => {
    const ok = validateBooking({
      date: "2025-10-17",
      time: "18:00",
      guests: 2,
      occasion: "",
    });
    expect(ok).toBe(false);
  });

  test("invalid when guests < 1", () => {
    const ok = validateBooking({
      date: "2025-10-17",
      time: "18:00",
      guests: 0,
      occasion: "Birthday",
    });
    expect(ok).toBe(false);
  });

  test("invalid when guests > 10", () => {
    const ok = validateBooking({
      date: "2025-10-17",
      time: "18:00",
      guests: 12,
      occasion: "Birthday",
    });
    expect(ok).toBe(false);
  });
});
