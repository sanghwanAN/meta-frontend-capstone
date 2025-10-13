import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <img
            src="./Logo.svg"
            alt="Little Lemon Logo"
            width="150"
            height="auto"
          />
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
        </nav>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main>
        {/* Hero 섹션 */}
        <section aria-labelledby="hero-heading">
          <h1 id="hero-heading">Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
          <img
            src="./hero.jpg"
            alt="Little Lemon restaurant view"
            width="100%"
            height="auto"
          />
        </section>

        {/* Highlights (특선 메뉴) 섹션 */}
        <section aria-labelledby="specials-heading">
          <h2 id="specials-heading">This Week's Specials!</h2>
          <div className="specials">
            <article>
              <img src="./dish1.jpg" alt="Greek Salad" />
              <h3>Greek Salad</h3>
              <p>Fresh salad with feta cheese, tomatoes, and olives.</p>
              <a href="#">Order Delivery</a>
            </article>

            <article>
              <img src="./dish2.jpg" alt="Bruschetta" />
              <h3>Bruschetta</h3>
              <p>Toasted bread with tomatoes and olive oil.</p>
              <a href="#">Order Delivery</a>
            </article>

            <article>
              <img src="./dish3.jpg" alt="Lemon Dessert" />
              <h3>Lemon Dessert</h3>
              <p>A refreshing lemon dessert with a creamy texture.</p>
              <a href="#">Order Delivery</a>
            </article>
          </div>
        </section>

        {/* Testimonials 섹션 */}
        <section aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading">Testimonials</h2>
          <div className="testimonials">
            <article>
              <p>"The best Mediterranean food I've ever had!"</p>
              <p>- Sarah M.</p>
            </article>

            <article>
              <p>"Amazing atmosphere and fresh ingredients!"</p>
              <p>- Daniel R.</p>
            </article>
          </div>
        </section>

        {/* About 섹션 */}
        <section aria-labelledby="about-heading">
          <h2 id="about-heading">About Little Lemon</h2>
          <div className="about">
            <img src="./about.jpg" alt="Little Lemon owners" />
            <p>
              Little Lemon is a family-owned Mediterranean restaurant founded by
              two brothers who wanted to bring authentic flavors to Chicago.
            </p>
          </div>
        </section>
      </main>

      {/* 푸터 영역 */}
      <footer>
        <section>
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
        </section>
      </footer>
    </>
  );
}

export default App;
