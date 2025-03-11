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
  item: Product;
  onAddToCart: (product: Product) => void
}

const ProductCart: React.FC<Props> = ({ item, onAddToCart }) => {
  return (
    <div className="shadow-lg rounded-xl p-4 border border-2 border-black ">
      <img src={item.image} alt={item.title} className="w-full h-48 object-contain" />
      <div className="mt-4">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600 line-clamp-4">{item.description}</p>
        <p className="text-black-600 font-[500] pt-2">${item.price}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">⭐ {item.rating.rate}</span>
          <span className="text-gray-500 text-sm ml-2">({item.rating.count} reviews)</span>
        </div>
        <button onClick={() => onAddToCart(item)} className="mt-3 w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;