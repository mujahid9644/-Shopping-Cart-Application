import { useEffect } from "react";
import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { formatPrice } from "../utils";

/** Slide-in cart drawer with item list and summary. */
export default function Cart({ open, onClose }) {
  const { items, totalItems, totalPrice, clear } = useCart();

  // Close on Escape and lock page scroll while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <>
      <div className={`overlay ${open ? "is-open" : ""}`} onClick={onClose} />
      <aside
        className={`drawer ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        aria-label="Shopping cart"
      >
        <div className="drawer__head">
          <h2>Your cart ({totalItems})</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Your cart is empty. Add something from the catalog.</p>
        ) : (
          <>
            <ul className="drawer__list">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>

            <div className="drawer__summary">
              <div className="row">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>
              <div className="row row--total">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <button
                className="btn btn--primary"
                onClick={() => {
                  alert("Thanks for shopping! (Demo checkout)");
                  clear();
                  onClose();
                }}
              >
                Checkout
              </button>
              <button className="btn btn--ghost" onClick={clear}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
