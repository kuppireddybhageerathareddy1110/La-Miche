"use client";

import React, { createContext, useContext, useReducer, useCallback, ReactNode } from "react";
import { Product } from "./data";

// ── Types ────────────────────────────────────────────────────────
interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  toast: { message: string; visible: boolean };
}

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: number }
  | { type: "CHANGE_QUANTITY"; productId: number; delta: number }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "SHOW_TOAST"; message: string }
  | { type: "HIDE_TOAST" };

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  changeQuantity: (productId: number, delta: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  showToast: (message: string) => void;
  totalItems: number;
  totalPrice: number;
}

// ── Reducer ──────────────────────────────────────────────────────
const initialState: CartState = {
  items: [],
  isOpen: false,
  toast: { message: "", visible: false },
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existing = state.items.find((i) => i.product.id === action.product.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.product.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { product: action.product, quantity: 1 }] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter((i) => i.product.id !== action.productId) };
    case "CHANGE_QUANTITY": {
      const newItems = state.items
        .map((i) =>
          i.product.id === action.productId ? { ...i, quantity: Math.max(0, i.quantity + action.delta) } : i
        )
        .filter((i) => i.quantity > 0);
      return { ...state, items: newItems };
    }
    case "CLEAR_CART":
      return { ...state, items: [] };
    case "TOGGLE_CART":
      return { ...state, isOpen: !state.isOpen };
    case "SHOW_TOAST":
      return { ...state, toast: { message: action.message, visible: true } };
    case "HIDE_TOAST":
      return { ...state, toast: { ...state.toast, visible: false } };
    default:
      return state;
  }
}

// ── Context ──────────────────────────────────────────────────────
const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback(
    (product: Product) => {
      dispatch({ type: "ADD_TO_CART", product });
      dispatch({ type: "SHOW_TOAST", message: `${product.name} added!` });
      setTimeout(() => dispatch({ type: "HIDE_TOAST" }), 2800);
    },
    []
  );

  const removeFromCart = useCallback((productId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", productId });
  }, []);

  const changeQuantity = useCallback((productId: number, delta: number) => {
    dispatch({ type: "CHANGE_QUANTITY", productId, delta });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: "TOGGLE_CART" });
  }, []);

  const showToast = useCallback((message: string) => {
    dispatch({ type: "SHOW_TOAST", message });
    setTimeout(() => dispatch({ type: "HIDE_TOAST" }), 2800);
  }, []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ state, addToCart, removeFromCart, changeQuantity, clearCart, toggleCart, showToast, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
