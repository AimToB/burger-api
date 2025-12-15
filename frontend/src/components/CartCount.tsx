"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export function CartCount() {
  const { items } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return <span className="cart-count">{count}</span>;
}
