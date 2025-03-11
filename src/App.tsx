import React, { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";

const App: React.FC = () => {
  const [product, setProduct] = useState<Product[]>(() => {
    return JSON.parse(localStorage.getItem("products") || "[]");
  });
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState<number>(0);

  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    quantity: number;
  }

  useEffect(() => {
    if (product.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: Product[]) => {
          const productsWithQuantity = data.map((item) => ({
            ...item,
            quantity: 0,
          }));
          setProduct(productsWithQuantity);
          localStorage.setItem("products", JSON.stringify(productsWithQuantity)); // Store updated products
        })
        .catch((err) => console.log(err.message));
    }
  }, []);

  const onAddToCart = (product: Product): void => {
    setCartItems((oldState) => {
      const itemExists = oldState.find((item) => item.id === product.id);
      if (itemExists) {
        return oldState.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...oldState, { ...product, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    setCartItemsCount(() =>
      cartItems.reduce((acc, item) => acc + item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <>
      <Navbar cartItems={cartItems} cartItemsCount={cartItemsCount} />
      <ProductList product={product} onAddToCart={onAddToCart} />
    </>
  );
};

export default App;
