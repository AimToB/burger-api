import { apiFetch } from "@/lib/api";

export default async function MenuPreview() {
  const burgers = await apiFetch("menu");

  return (
    <section className="menu-preview" id="menu">
      <h2>Popular burgers</h2>

      <div className="grid">
        {burgers.map((b: any) => (
          <div key={b.id} className="burger-card">
            <div className="burger-image">
              <img
                src={b.image || "/assets/img/burger-placeholder.jpg"}
                alt={b.name}
                loading="lazy"
              />
            </div>

            <div className="burger-content">
              <h3>{b.name}</h3>
              <p>{b.description}</p>

              <div className="burger-footer">
                <span>${b.price}</span>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
