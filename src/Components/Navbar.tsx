import React, { useState } from "react";

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

interface Prop {
  cartItems: Product[];
  cartItemsCount: number;
}

const Navbar: React.FC<Prop> = ({ cartItems, cartItemsCount }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mx-auto px-16 flex flex-row justify-between items-center">
      <h1 className="text-5xl text-center my-4">Products</h1>
      <button className="relative" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-cart-shopping fa-2xl"></i>
        <p className="absolute bg-white text-black rounded px-1 top-0 end-0 -translate-y-4 translate-x-2">
          {cartItemsCount}
        </p>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="relative bg-white px-6 pb-6 rounded-lg shadow-lg w-96 h-90 overflow-y-auto">
            <div className="sticky top-0 flex justify-between align-center bg-white py-3">
              <h2 className="text-xl font-semibold ">Your Cart</h2>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg "
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

            </div>

            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="border-b py-2">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p>${item.price} × {item.quantity}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
