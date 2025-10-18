/**
 * @jest-environment jsdom
 */

import { initializeTimes, updateTimes } from "../pages/BookingPage";

//  fetchAPI 전역을 양쪽에 모두 심어줌
window.fetchAPI = jest.fn();
global.fetchAPI = window.fetchAPI;

// initializeTimes
test("initializeTimes returns available times from fetchAPI", () => {
  window.fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

// updateTimes
test("updateTimes calls fetchAPI with the provided date", () => {
  const mockDate = new Date("2025-10-17");
  window.fetchAPI.mockReturnValue(["20:00", "21:00"]);
  const result = updateTimes([], { type: "UPDATE_TIMES", payload: mockDate });
  expect(window.fetchAPI).toHaveBeenCalledWith(mockDate);
  expect(result).toEqual(["20:00", "21:00"]);
});
