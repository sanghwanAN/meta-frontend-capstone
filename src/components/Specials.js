export default function Specials() {
  return (
    <section className="specials">
      <h2>This Week's Specials</h2>
      <div className="special-grid">
        <article>
          <img src="/dish1.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh salad with feta cheese and olives.</p>
        </article>
        <article>
          <img src="/dish2.jpg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Toasted bread with tomatoes and olive oil.</p>
        </article>
      </div>
    </section>
  );
}
