import useCart from "../hooks/useCart";
import QuantityControl from "./QuantityControl";
import { formatPrice } from "../utils";

export default function CartItem({ item }) {
  const { increase, decrease, remove } = useCart();

  return (
    <li className="cart-item">
      <img src={item.image} alt="" className="cart-item__img" />
      <div className="cart-item__info">
        <h4>{item.title}</h4>
        <p className="cart-item__price">{formatPrice(item.price)}</p>
        <div className="cart-item__actions">
          <QuantityControl
            title={item.title}
            quantity={item.quantity}
            onIncrease={() => increase(item.id)}
            onDecrease={() => decrease(item.id)}
          />
          <button className="link-btn" onClick={() => remove(item.id)}>
            Remove
          </button>
        </div>
      </div>
      <strong className="cart-item__total">
        {formatPrice(item.price * item.quantity)}
      </strong>
    </li>
  );
}
