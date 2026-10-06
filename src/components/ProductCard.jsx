import { useState } from "react";
import useCart from "../hooks/useCart";
import { formatPrice } from "../utils";

export default function ProductCard({ product }) {
  const { items, addToCart } = useCart();
  const [imgFailed, setImgFailed] = useState(false);
  const inCart = items.find((i) => i.id === product.id);

  return (
    <article className="card">
      <div className="card__media">
        {imgFailed ? (
          <div className="card__fallback" aria-hidden="true">🛍️</div>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        )}
      </div>

      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h3 className="card__title">{product.title}</h3>
        <p className="card__price">{formatPrice(product.price)}</p>

        <button className="btn btn--primary" onClick={() => addToCart(product)}>
          {inCart ? `Add another (${inCart.quantity} in cart)` : "Add to cart"}
        </button>
      </div>
    </article>
  );
}
