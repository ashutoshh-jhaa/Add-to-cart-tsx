import React from "react"
import ProductCart from "./ProductCart"

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  },
  quantity: number,
}

interface Props {
  product: Product[],
  onAddToCart: (product: Product) => void
}

const ProductList: React.FC<Props> = ({ product, onAddToCart }) => {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 container mx-auto my-3 ">
        {product.map((item) => (
          <ProductCart item={item} key={item.id} onAddToCart={onAddToCart} />
        ))}
      </div>
    </>
  )
}

export default ProductList