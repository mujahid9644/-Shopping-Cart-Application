import { useCallback, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

import useDebounce from "./hooks/useDebounce";
import { products, categories } from "./data/products";

export default function App() {
  // -----------------------------
  // UI state
  // -----------------------------
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Delay search filtering until the user stops typing.
  const debouncedSearch = useDebounce(search);

  // -----------------------------
  // Helper Variables
  // -----------------------------
  // FIX: Define the current year so the footer doesn't crash
  const currentYear = new Date().getFullYear();

  // -----------------------------
  // Event handlers
  // -----------------------------

  const handleSearchChange = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  // -----------------------------
  // Product filtering
  // -----------------------------

  const visibleProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, selectedCategory]);

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <div className="app">
      <Navbar
        search={search}
        onSearchChange={handleSearchChange}
        onCartClick={openCart}
      />

      <main className="container">
        <section className="shop-header">
  <div className="shop-header-content">
    <span className="section-label">Our Collection</span>
    <h1 className="page-title">Shop all products</h1>
    <p className="page-description">
      Discover quality products at great prices.
    </p>
  </div>
  
  <div className="product-count">
    {visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}
  </div>
</section>

        <section className="shop-controls">
          <CategoryFilter
            categories={categories}
            active={selectedCategory}
            onChange={handleCategoryChange}
          />
        </section>

        <section className="products-section" aria-label="Product catalog">
          {visibleProducts.length > 0 ? (
            <ProductGrid products={visibleProducts} />
          ) : (
            <div className="empty-products">
              <div className="empty-icon">🔍</div>

              <h2>No products found</h2>

              <p>
                Try a different search term or select another category.
              </p>

              <button
                className="reset-btn"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* --- NEW FOOTER --- */}
      <footer className="footer">
        <div className="container footer-content">
          
          {/* Column 1: Brand & About */}
          <div className="footer-col">
            <h3 className="footer-logo">ShopCart</h3>
            <p className="footer-desc">
              Your one-stop shop for quality groceries and everyday essentials. 
              Fresh, fast, and reliable.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#products">All Products</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Discounted</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Refunds</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p>Subscribe to get special offers and updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-content">
            <span>© {currentYear} ShopCart. All rights reserved.</span>
            <span>Built with React ⚛️</span>
          </div>
        </div>
      </footer>

      <Cart open={isCartOpen} onClose={closeCart} />
    </div>
  );
}