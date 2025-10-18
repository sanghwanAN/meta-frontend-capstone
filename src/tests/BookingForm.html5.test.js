/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "../components/BookingForm";

function setup() {
  const props = {
    availableTimes: ["17:00", "18:00"],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };
  render(<BookingForm {...props} />);
}

test("date input has required", () => {
  setup();
  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute("type", "date");
});

test("time select has required and renders options", () => {
  setup();
  const timeSelect = screen.getByLabelText(/choose time/i);
  expect(timeSelect).toBeRequired();
  // placeholder + options(두 개)
  expect(timeSelect.querySelectorAll("option").length).toBeGreaterThanOrEqual(
    3
  );
});

test("guests input has min/max and required", () => {
  setup();
  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute("type", "number");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select has required", () => {
  setup();
  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeRequired();
});

test("submit button disabled until form valid", async () => {
  setup();
  const user = userEvent.setup();

  const btn = screen.getByRole("button", { name: /confirm reservation/i });
  expect(btn).toBeDisabled();

  // 필수 값 채우기
  await user.type(screen.getByLabelText(/choose date/i), "2025-10-17");
  await user.selectOptions(screen.getByLabelText(/choose time/i), "17:00");
  await user.clear(screen.getByLabelText(/number of guests/i));
  await user.type(screen.getByLabelText(/number of guests/i), "2");
  await user.selectOptions(screen.getByLabelText(/occasion/i), "Birthday");

  expect(btn).toBeEnabled();
});
