import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <p className="empty">
        No products match your search. Try a different word or category.
      </p>
    );
  }
  return (
    <section className="grid" aria-label="Products">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
