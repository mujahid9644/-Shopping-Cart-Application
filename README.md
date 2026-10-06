<div align="center">

# 🛒 ShopCart

### A Modern, Responsive React Shopping Cart Application

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

A fully functional e-commerce frontend built with **React 18**, **Vite**, and the **Context API**. This project demonstrates clean architecture, efficient global state management, custom hooks, and a mobile-first UI design.

[View Live Demo][(https://shopping-cart-application-sand.vercel.app/)![Uploading image.png…]()
) · [Report Bug](https://github.com/mujahid9644/Shopping-Cart-Application/issues) · [Request Feature](https://github.com/mujahid9644/Shopping-Cart-Application/issues)

</div>

---

## 📖 Table of Contents
- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Future Improvements](#-future-improvements)
- [License](#-license)
- [Author](#-author)

---

## 🎯 About The Project

ShopCart is a responsive shopping cart application designed to provide a seamless shopping experience. It focuses on efficient state management using React's `useReducer` and Context API, paired with a clean, modern UI that adapts beautifully across mobile, tablet, and desktop devices.

### ✨ Key Features

**🛍️ Core Functionality**
- **Product Catalog:** Interactive grid layout displaying products with images, titles, categories, and prices.
- **Search & Filter:** Real-time search with debouncing and category-based filtering.
- **Cart Operations:** Add to cart, increase/decrease quantity, remove items, and clear the entire cart.
- **Cart Summary:** Live updating of total item count and total price.
- **Data Persistence:** Cart state is automatically saved to `localStorage`, surviving page refreshes.

**🎨 UI & Responsive Design**
- **Mobile-First:** Fluid grid that adapts seamlessly from 1 column (mobile) to 4 columns (desktop).
- **Cart Drawer:** A smooth slide-out drawer keeps the main product view uncluttered.
- **Empty States:** Helpful UI for when no products match a search or the cart is empty.

**🏗️ Architecture & State Management**
- **Global State:** Utilizes **React Context API** + `useReducer` for predictable, centralized cart state.
- **Custom Hooks:** Extracted logic into reusable hooks (`useCart`, `useDebounce`, `useLocalStorage`).
- **Performance:** Optimized with `useMemo` and `useCallback` to minimize unnecessary re-renders.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 18, JavaScript (ES6+) |
| **Build Tool** | Vite |
| **State Management** | React Context API + `useReducer` |
| **Styling** | Vanilla CSS (CSS Variables, Flexbox, CSS Grid) |
| **Persistence** | LocalStorage |

---

## 📂 Project Structure

```text
react-shopping-cart/
├── public/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   └── QuantityControl.jsx
│   ├── context/             # Global state management
│   │   └── CartContext.jsx
│   ├── data/                # Mock data
│   │   └── products.js
│   ├── hooks/               # Custom React hooks
│   │   ├── useCart.js
│   │   ├── useDebounce.js
│   │   └── useLocalStorage.js
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # React entry point
│   └── styles.css           # Global styles & design tokens
├── index.html
├── package.json
└── vite.config.js
