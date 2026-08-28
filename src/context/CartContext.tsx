"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type CartItem = {
  id: string;
  tourId: string;
  title: string;
  room: string;
  image: string;
  unitPrice: number;
  depositPerPerson: number;
  count: number;
};

const DEFAULT_CART_ITEMS: CartItem[] = [
  {
    id: "iraq-2024",
    tourId: "wander-across-iraq-2024",
    title: "Wander Across Iraq",
    room: "Shared Room",
    image: "/images/cardImages/Card1.png",
    unitPrice: 3975,
    depositPerPerson: 500,
    count: 1,
  },
  {
    id: "se-asia-2024",
    tourId: "se-asia-culinary-journey-2024",
    title: "SE Asia Culinary Journey (2024)",
    room: "Single Supplement",
    image: "/images/cardImages/Card2.png",
    unitPrice: 4450,
    depositPerPerson: 500,
    count: 1,
  },
];

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, count: number) => void;
  clearCart: () => void;
  totalDeposit: number;
  totalTripCost: number;
  dueToday: number;
  futurePayments: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(DEFAULT_CART_ITEMS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("tour_cart_items");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCartItems(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("tour_cart_items", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (newItem: Omit<CartItem, "id">) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (i) => i.tourId === newItem.tourId && i.room === newItem.room
      );
      if (existing) {
        return prev.map((i) =>
          i.id === existing.id ? { ...i, count: i.count + newItem.count } : i
        );
      }
      return [
        ...prev,
        {
          ...newItem,
          id: `${newItem.tourId}-${newItem.room.replace(/\s+/g, "-")}-${Date.now()}`,
        },
      ];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, count: number) => {
    if (count <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, count } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  const totalDeposit = cartItems.reduce(
    (sum, item) => sum + item.depositPerPerson * item.count,
    0
  );
  const totalTripCost = cartItems.reduce(
    (sum, item) => sum + item.unitPrice * item.count,
    0
  );
  const dueToday = totalDeposit;
  const futurePayments = Math.max(0, totalTripCost - dueToday);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalDeposit,
        totalTripCost,
        dueToday,
        futurePayments,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
