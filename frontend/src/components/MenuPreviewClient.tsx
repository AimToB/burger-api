// src/components/MenuPreviewClient.tsx (CLIENT)
"use client";

import { useCart } from "@/context/CartContext";

type Burger = {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string | null;
};

export default function MenuPreviewClient({ burgers }: { burgers: Burger[] }) {
  const { addToCart } = useCart();

  return (
    <section className="menu-preview" id="menu">
      <h2>Popular burgers</h2>

      <div className="grid">
        {burgers.map((b) => (
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
                <button
                  onClick={() =>
                    addToCart({
                      id: b.id,
                      name: b.name,
                      price: b.price,
                      image: b.image || undefined,
                    })
                  }
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
