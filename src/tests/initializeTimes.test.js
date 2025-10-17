/**
 * @jest-environment jsdom
 */

import { initializeTimes, updateTimes } from "../pages/BookingPage";

// Coursera API가 전역 스크립트로 불린다고 가정
window.fetchAPI = jest.fn();

// ✅ initializeTimes 테스트
test("initializeTimes returns available times from fetchAPI", () => {
  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
  const result = initializeTimes();
  expect(result).toEqual(["17:00", "18:00", "19:00"]);
});

// ✅ updateTimes 테스트
test("updateTimes calls fetchAPI with the provided date", () => {
  const mockDate = new Date("2025-10-17");
  fetchAPI.mockReturnValue(["20:00", "21:00"]);
  const result = updateTimes([], { type: "UPDATE_TIMES", payload: mockDate });
  expect(fetchAPI).toHaveBeenCalledWith(mockDate);
  expect(result).toEqual(["20:00", "21:00"]);
});
