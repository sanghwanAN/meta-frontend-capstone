// src/pages/BookingPage.js
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <section className="booking">
      <header className="booking-header">
        <h1>Reserve a Table</h1>
        <p>Select your date and time to book a table at Little Lemon.</p>
      </header>

      <BookingForm />

      <aside className="booking-note">
        <h3>Need help?</h3>
        <p>Call us at (555) 555-5555 or email contact@littlelemon.com</p>
      </aside>
    </section>
  );
}
