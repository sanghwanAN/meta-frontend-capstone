/* global fetchAPI, submitAPI */
import { useReducer } from "react";
// import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return window.fetchAPI(action.payload); // ✅ 명시적 window 참조!
  }
  return state;
}
// 초기 상태 함수
function initializeTimes() {
  const today = new Date();
  return window.fetchAPI(today); // ✅ 동일하게 수정
}

export default function BookingPage() {
  const navigate = useNavigate();
  // useReducer로 API 데이터 관리
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  // 날짜 변경 시 reducer 호출
  // const handleDateChange = (selectedDate) => {
  //   dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
  // };

  // 폼 제출 처리
  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmed");
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <section className="booking">
      <header className="booking-header">
        <h1>Reserve a Table</h1>
        <p>Select your date and time to book a table at Little Lemon.</p>
      </header>

      {/* API 연동된 availableTimes 전달 */}
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <aside className="booking-note">
        <h3>Need help?</h3>
        <p>Call us at (555) 555-5555 or email contact@littlelemon.com</p>
      </aside>
    </section>
  );
}

export { initializeTimes, updateTimes };
