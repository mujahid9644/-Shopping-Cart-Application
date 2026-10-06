import { createContext, useContext, useMemo, useReducer, useEffect } from "react";

const STORAGE_KEY = "shopcart:items";
const CartContext = createContext(null);

/**
 * Cart reducer. State is an array of { ...product, quantity }.
 * Keeping all transitions here makes cart behaviour predictable.
 */
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const exists = state.some((i) => i.id === action.product.id);
      return exists
        ? state.map((i) =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + 1 } : i
          )
        : [...state, { ...action.product, quantity: 1 }];
    }
    case "INCREASE":
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    case "DECREASE":
      // Quantity never drops below 1; use REMOVE to delete an item.
      return state.map((i) =>
        i.id === action.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i
      );
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

// Restore the cart from localStorage on first load.
function init() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, [], init);

  // Persist on every change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    return {
      items,
      totalItems,
      totalPrice,
      addToCart: (product) => dispatch({ type: "ADD", product }),
      increase: (id) => dispatch({ type: "INCREASE", id }),
      decrease: (id) => dispatch({ type: "DECREASE", id }),
      remove: (id) => dispatch({ type: "REMOVE", id }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook for consuming the cart.
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
