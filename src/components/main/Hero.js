export default function Hero() {
  return (
    <section className="main-sec main-sec--hero">
      <div className="main-sec__inner">
        <div className="main-sec--hero__left">
          <h2 className="main-sec__tit">
            Little Lemon
            <stong className="tit-strong">Chicago</stong>
          </h2>
          <div className="hero-sec-cont">
            <p>
              we are Family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
          <a href="/booking" class="btn-booking">
            Reserve a Table
          </a>
        </div>
        <div className="main-sec--hero__right">
          <span className="main-sec--hero__img">
            <img src="/images/hero.jpg" alt="초밥" />
          </span>
        </div>
      </div>
    </section>
  );
}
