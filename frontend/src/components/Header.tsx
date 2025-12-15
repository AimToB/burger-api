"use client";

import { siteConfig } from "@/config/siteConfig";
import { useEffect, useState } from "react";
import CartIcon from "../assets/cart.svg";
import ReserveNowButton from "./ReserveButton";

export default function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";
  }, [cartOpen]);

  return (
    <>
      <div
        className={`cart-overlay ${cartOpen ? "open" : ""}`}
        onClick={() => setCartOpen(false)}
      >
        <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
          <h3>Your cart</h3>
          {/* cart items */}
        </div>
      </div>

      <header className="header" id="nav">
        <a href="#" id="logo-a">
          <div className="logo">{siteConfig.name}</div>
        </a>
        <nav>
          <a href="#hero">Home</a>
          <a href="#menu">Menu</a>
          <ReserveNowButton />
          <button
            className="cart-button"
            aria-label="Open cart"
            onClick={() => setCartOpen((open) => !open)}
          >
            <CartIcon className="cart-icon" />
            <span className="cart-count">2</span>
          </button>
        </nav>
      </header>
    </>
  );
}
