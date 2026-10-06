export default function CategoryFilter({ categories, active, onChange }) {
  return (
    <nav className="filters" aria-label="Product categories">
      {categories.map((c) => (
        <button
          key={c}
          className={`filters__btn ${c === active ? "is-active" : ""}`}
          aria-pressed={c === active}
          onClick={() => onChange(c)}
        >
          {c}
        </button>
      ))}
    </nav>
  );
}
