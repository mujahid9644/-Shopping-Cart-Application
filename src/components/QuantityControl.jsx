export default function QuantityControl({ quantity, onIncrease, onDecrease, title }) {
  return (
    <div className="qty" role="group" aria-label={`Quantity for ${title}`}>
      <button onClick={onDecrease} disabled={quantity <= 1} aria-label="Decrease quantity">
        −
      </button>
      <span aria-live="polite">{quantity}</span>
      <button onClick={onIncrease} aria-label="Increase quantity">
        +
      </button>
    </div>
  );
}
