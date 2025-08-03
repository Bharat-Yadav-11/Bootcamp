import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartDrawer from "./components/CartDrawer";

const products = [
  {
    id: 1,
    name: "React T‑Shirt",
    price: 799,
    image: "https://source.unsplash.com/400x300/?reactjs,tshirt&sig=1",
  },
  {
    id: 2,
    name: "Node.js Hoodie",
    price: 1499,
    image: "https://source.unsplash.com/400x300/?nodejs,hoodie&sig=2",
  },
  {
    id: 3,
    name: "JavaScript Mug",
    price: 499,
    image: "https://source.unsplash.com/400x300/?javascript,mug&sig=3",
  },
  {
    id: 4,
    name: "Python Stickers",
    price: 199,
    image: "https://source.unsplash.com/400x300/?python,stickers&sig=4",
  },
  {
    id: 5,
    name: "VS Code Notebook",
    price: 299,
    image: "https://source.unsplash.com/400x300/?code,notebook&sig=5",
  },
  {
    id: 6,
    name: "Linux Badge",
    price: 149,
    image: "https://source.unsplash.com/400x300/?linux,badge&sig=6",
  },
  {
    id: 7,
    name: "AI Art Poster",
    price: 999,
    image: "https://source.unsplash.com/400x300/?ai,art&sig=7",
  },
  {
    id: 8,
    name: "GitHub Water Bottle",
    price: 899,
    image: "https://source.unsplash.com/400x300/?github,bottle&sig=8",
  },
  {
    id: 9,
    name: "Dark Mode Lamp",
    price: 1299,
    image: "https://source.unsplash.com/400x300/?darkmode,lamps&sig=9",
  },
  {
    id: 10,
    name: "Tech Backpack",
    price: 2199,
    image: "https://source.unsplash.com/400x300/?tech,backpack&sig=10",
  },
  {
    id: 11,
    name: "TypeScript Cap",
    price: 599,
    image: "https://source.unsplash.com/400x300/?typescript,cap&sig=11",
  },
  {
    id: 12,
    name: "Figma Mousepad",
    price: 499,
    image: "https://source.unsplash.com/400x300/?figma,mousepad&sig=12",
  },
  {
    id: 13,
    name: "Terminal Socks",
    price: 349,
    image: "https://source.unsplash.com/400x300/?terminal,socks&sig=13",
  },
  {
    id: 14,
    name: "Docker Tumbler",
    price: 749,
    image: "https://source.unsplash.com/400x300/?docker,tumbler&sig=14",
  },
  {
    id: 15,
    name: "Kubernetes Keychain",
    price: 249,
    image: "https://source.unsplash.com/400x300/?kubernetes,keychain&sig=15",
  },
];

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
          : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🛍️ React Cart</h1>
        <button
          onClick={() => setCartOpen(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          View Cart ({cart.length})
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemove}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      )}
    </div>
  );
}

export default App;
