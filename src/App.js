import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      {/* 푸터 영역 */}
    </Router>
  );
}

export default App;
