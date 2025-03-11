import React from "react";

interface Product {
  id: number,
  title: string,
  price: number,
  image: string,
  category: string,
  description: string,
  rating: {
    rate: number,
    count: number,
  },
  quantity: number,
}

interface Props {
  cartItems: Product[];
}

const Cart: React.FC<Props> = ({ cartItems }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto my-3 ">
        {
          cartItems.map((item, idx) => (
            <div className="shadow-lg rounded-xl p-4 border border-2 border-black " key={idx}>
              <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-black-600 font-[500] pt-2">${item.price}</p>
                <div className="flex items-center mt-2">
                  <p className="text-black-600 font-[500] ">Quantity : {item.quantity}</p>
                </div>
                <button className="mt-3 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-black">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Cart;