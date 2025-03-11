# React & TypeScript: Add to Cart Functionality

## Overview
This is a simple e-commerce product listing app built with **React, TypeScript, and Tailwind CSS**. It fetches products from [FakeStoreAPI](https://fakestoreapi.com/) and allows users to add items to a cart. The cart count updates dynamically, and users can view their selected products in a modal.

## Features
- Fetches product data from an API and displays them in a grid layout.
- Users can add products to the cart.
- Quantity updates dynamically for products already in the cart.
- Cart icon displays the total number of items.
- Modal popup shows all cart items.
- Responsive design using Tailwind CSS.

## Tech Stack
- **React** (Functional Components, Hooks)
- **TypeScript** (Strong type safety)
- **Tailwind CSS** (Styling)
- **FakeStoreAPI** (Mock product data)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ashutoshh-jhaa/Add-to-cart-tsx.git
   cd Add-to-cart-tsx
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

## Project Structure
```
📦 ecommerce-product-list
├── 📂 src
│   ├── 📂 components
│   │   ├── Navbar.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductCart.tsx
│   │   ├── CartModal.tsx
│   ├── App.tsx
│   ├── main.tsx
├── 📜 README.md
├── 📜 package.json
├── 📜 tsconfig.json
└── 📜 tailwind.config.js
```

## API Endpoint
This project fetches data from:
```
https://fakestoreapi.com/products
```

## Usage
1. Browse the products displayed in a grid layout.
2. Click on "Add to Cart" to add an item.
3. The cart icon updates with the total quantity.
4. Click the cart icon to open a modal and view added products.

## Future Enhancements
- Implement local storage for cart persistence.
- Add product filtering and sorting options.
- Enhance UI with animations.

## License
This project is **MIT licensed**. Feel free to use and modify it.

## Author
[Ashutosh Jha](https://github.com/ashutoshh-jhaa)
