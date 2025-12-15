"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function CartPanel() {
  const { items, removeFromCart, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🚨 Critical: do not render cart contents on the server
  if (!mounted) return null;

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
      <h3>Your cart</h3>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty 🍔</p>
      ) : (
        <>
          <ul className="cart-items">
            {items.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-left">
                  <img
                    src={item.image || "/assets/img/burger-placeholder.jpg"}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div className="cart-item-text">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-qty">× {item.quantity}</span>
                  </div>
                </div>

                <div className="cart-item-right">
                  <span className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="cart-buttons">
              <button onClick={clearCart} className="cart-clear">
                Clear cart
              </button>
              <button className="cart-checkout" disabled>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
