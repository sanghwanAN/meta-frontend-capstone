import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="site-header">
        <div className="site-header__inner">
          <h1 className="site-logo">
            <img src="/images/little-lemon.svg" alt="logo" />
          </h1>
          <Nav />
        </div>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__left">
            <img src="/images/little-lemon.svg" alt="logo" />
          </div>
          <div className="site-footer__right">
            <div className="bot-nav-grid">
              <div className="bot-nav-grid-item">
                <h5 className="bot-nav-tit">Doormat Nav igation</h5>
                <nav className="bot-nav">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">menu</a>
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
                </nav>
              </div>
              <div className="bot-nav-grid-item">
                <h5 className="bot-nav-tit">Contact</h5>
                <nav className="bot-nav">
                  <ul>
                    <li>
                      <a href="#">Adress</a>
                    </li>
                    <li>
                      <a href="#">phone number</a>
                    </li>
                    <li>
                      <a href="#">email</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="bot-nav-grid-item">
                <h5 className="bot-nav-tit">Social M edia Links</h5>
                <nav className="bot-nav">
                  <ul>
                    <li>
                      <a href="#">Adress</a>
                    </li>
                    <li>
                      <a href="#">phone number</a>
                    </li>
                    <li>
                      <a href="#">email</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
