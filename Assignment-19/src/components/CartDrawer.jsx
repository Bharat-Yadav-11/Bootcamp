import React from 'react';

const CartDrawer = ({ cart, onClose, onRemove, onIncrement, onDecrement }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black">&times;</button>
      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b py-2">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>{item.qty} × {item.price} ₹</p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => onDecrement(item.id)} className="px-2 bg-gray-200 rounded">−</button>
              <button onClick={() => onIncrement(item.id)} className="px-2 bg-gray-200 rounded">+</button>
              <button onClick={() => onRemove(item.id)} className="text-red-500">🗑</button>
            </div>
          </div>
        ))
      )}
      <div className="mt-4 font-bold text-right">Total: {total} ₹</div>
    </div>
  );
};

export default CartDrawer;
