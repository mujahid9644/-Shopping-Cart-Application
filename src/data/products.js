// Mock product data. Each image URL belongs to the product it is shown with.
const cdn = (path) =>
  `https://cdn.dummyjson.com/product-images/${path}/thumbnail.webp`;

export const products = [

  // Electronics - Laptops
  { id: 21, title: "Apple MacBook Pro 14 Inch Space Grey", category: "Electronics", price: 1999.99, image: cdn("laptops/apple-macbook-pro-14-inch-space-grey") },
  { id: 22, title: "Asus Zenbook Pro Dual Screen Laptop", category: "Electronics", price: 1799.99, image: cdn("laptops/asus-zenbook-pro-dual-screen-laptop") },
  { id: 23, title: "Lenovo Yoga 920", category: "Electronics", price: 1099.99, image: cdn("laptops/lenovo-yoga-920") },
  { id: 24, title: "New DELL XPS 13 9300 Laptop", category: "Electronics", price: 1499.99, image: cdn("laptops/new-dell-xps-13-9300-laptop") },
  
  // Electronics - Smartphones
  { id: 17, title: "iPhone 13 Pro", category: "Electronics", price: 1099.99, image: cdn("smartphones/iphone-13-pro") },
  { id: 18, title: "Samsung Galaxy S10", category: "Electronics", price: 699.99, image: cdn("smartphones/samsung-galaxy-s10") },
  { id: 19, title: "Oppo F19 Pro Plus", category: "Electronics", price: 399.99, image: cdn("smartphones/oppo-f19-pro-plus") },
  { id: 20, title: "Realme XT", category: "Electronics", price: 349.99, image: cdn("smartphones/realme-xt") },
  
  // Electronics - Audio & Accessories
  { id: 13, title: "Apple AirPods Max Silver", category: "Electronics", price: 549.99, image: cdn("mobile-accessories/apple-airpods-max-silver") },
  { id: 14, title: "Beats Flex Wireless Earphones", category: "Electronics", price: 49.99, image: cdn("mobile-accessories/beats-flex-wireless-earphones") },
  { id: 15, title: "Apple MagSafe Battery Pack", category: "Electronics", price: 99.99, image: cdn("mobile-accessories/apple-magsafe-battery-pack") },
  { id: 16, title: "Apple iPhone Charger", category: "Electronics", price: 19.99, image: cdn("mobile-accessories/apple-iphone-charger") },


  // More Groceries
  { id: 25, title: "Kiwi", category: "Groceries", price: 2.49, image: cdn("groceries/kiwi") },
  { id: 26, title: "Juice", category: "Groceries", price: 3.99, image: cdn("groceries/juice") },
  { id: 27, title: "Cucumber", category: "Groceries", price: 1.49, image: cdn("groceries/cucumber") },
  { id: 28, title: "Eggs", category: "Groceries", price: 2.99, image: cdn("groceries/eggs") },

  // More Beauty
  { id: 29, title: "Powder Canister", category: "Beauty", price: 14.99, image: cdn("beauty/powder-canister") },
  { id: 30, title: "Red Nail Polish", category: "Beauty", price: 8.99, image: cdn("beauty/red-nail-polish") },

  // Beauty
  { id: 1, title: "Essence Mascara Lash Princess", category: "Beauty", price: 9.99, image: cdn("beauty/essence-mascara-lash-princess") },
  { id: 2, title: "Red Lipstick", category: "Beauty", price: 12.99, image: cdn("beauty/red-lipstick") },
  { id: 3, title: "Eyeshadow Palette with Mirror", category: "Beauty", price: 19.99, image: cdn("beauty/eyeshadow-palette-with-mirror") },

  // Fragrances
  { id: 4, title: "Calvin Klein CK One", category: "Fragrances", price: 49.99, image: cdn("fragrances/calvin-klein-ck-one") },
  { id: 5, title: "Dior J'adore", category: "Fragrances", price: 89.99, image: cdn("fragrances/dior-j'adore") },
  { id: 6, title: "Chanel Coco Noir Eau De", category: "Fragrances", price: 129.99, image: cdn("fragrances/chanel-coco-noir-eau-de") },

  // Furniture
  { id: 7, title: "Bedside Table African Cherry", category: "Furniture", price: 299.99, image: cdn("furniture/bedside-table-african-cherry") },
  { id: 8, title: "Knoll Saarinen Executive Conference Chair", category: "Furniture", price: 499.99, image: cdn("furniture/knoll-saarinen-executive-conference-chair") },
  { id: 9, title: "Annibale Colombo Sofa", category: "Furniture", price: 2499.99, image: cdn("furniture/annibale-colombo-sofa") },

  // Groceries
  { id: 10, title: "Apple", category: "Groceries", price: 1.99, image: cdn("groceries/apple") },
  { id: 11, title: "Honey Jar", category: "Groceries", price: 6.99, image: cdn("groceries/honey-jar") },
  { id: 12, title: "Ice Cream", category: "Groceries", price: 5.49, image: cdn("groceries/ice-cream") },
];

export const categories = ["All", ...new Set(products.map((p) => p.category))];