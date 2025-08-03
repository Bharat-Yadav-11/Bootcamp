import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
    <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-md" />
    <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600">{product.price} ₹</p>
    <button 
      onClick={() => onAddToCart(product)} 
      className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
