// src/components/Nav.js
import { Link } from "react-router-dom";
// import Logo from "../Logo.svg";

export default function Nav() {
  return (
    <nav className="navbar">
      {/* <img src={Logo} alt="Little Lemon Logo" className="logo" /> */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
}
