import useCart from "../hooks/useCart";

export default function Navbar({ search, onSearchChange, onCartClick }) {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a className="navbar__logo" href="/" aria-label="ShopCart home">
          shop<span>cart</span>
        </a>

        <input
          className="navbar__search"
          type="search"
          placeholder="Search products"
          aria-label="Search products"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <button
          className="navbar__cart"
          onClick={onCartClick}
          aria-label={`Open cart, ${totalItems} items`}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
          </svg>
          <span className="navbar__badge">{totalItems}</span>
        </button>
      </div>
    </header>
  );
}
