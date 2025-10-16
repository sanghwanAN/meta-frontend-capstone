import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
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
        </Routes>
      </main>

      {/* 푸터 영역 */}
      <footer>
        footer
        {/* <section>
          <img
            src="./Logo.svg"
            alt="Little Lemon small logo"
            width="100"
            height="auto"
          />
        </section>
        <section>
          <h4>Navigation</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Contact</h4>
          <address>
            123 Lemon Street, Chicago, IL
            <br />
            (555) 555-5555
            <br />
            contact@littlelemon.com
          </address>
        </section>
        <section>
          <h4>Social Media</h4>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </section> */}
      </footer>
    </Router>
  );
}

export default App;
