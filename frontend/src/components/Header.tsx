"use client";

import { siteConfig } from "@/config/siteConfig";
import { useEffect, useState } from "react";
import Image from "next/image";
import cartIcon from "../assets/cart.svg";
import ReserveNowButton from "./ReserveButton";
import { CartCount } from "./CartCount";
import CartPanel from "./CartPanel";

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
        <CartPanel />
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
            <Image src={cartIcon} alt="Cart" className="cart-icon" />
            <CartCount />
          </button>
        </nav>
      </header>
    </>
  );
}
