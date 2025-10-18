export default function Specials() {
  return (
    <section className="main-sec main-sec--specials">
      <div className="main-sec__inner">
        <div className="specials-sec-header">
          <h2 className="main-sec__tit">This Week's Specials!</h2>
          <button type="button" className="btn-menu">
            Online Menu
          </button>
        </div>
        <div className="special-grid-wrap">
          <ul className="special-grid">
            <li>
              <span className="special-grid__img">
                <img src="/images/greek_salad.jpg" alt="greek salad" />
              </span>
              <div className="special-grid__cont">
                <h3 className="special-grid__tit">Greek Salad</h3>
                <p className="special-grid__desc">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.{" "}
                </p>
              </div>
            </li>
            <li>
              <span className="special-grid__img">
                <img src="/images/bruchetta.jpg" alt="Bruschetta" />
              </span>
              <div className="special-grid__cont">
                <h3 className="special-grid__tit">Bruschetta</h3>
                <p className="special-grid__desc">
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.
                </p>
              </div>
            </li>
            <li>
              <span className="special-grid__img">
                <img src="/images/lemon_dessert.jpg" alt="lemon dessert" />
              </span>
              <div className="special-grid__cont">
                <h3 className="special-grid__tit">Bruschetta</h3>
                <p className="special-grid__desc">
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
