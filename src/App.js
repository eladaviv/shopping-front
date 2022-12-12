import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addToCart = (item) => {
    const existItem = cart.find(i => i._id === item._id);
    if (!existItem) {
      let totalPrice = 0;
      cart.forEach(cart_item => {
        totalPrice += cart_item.price;
      });
      totalPrice += item.price;
      setCart(cart => [...cart, item]);
      setTotalPrice(totalPrice);
    }
  }
  const deleteItemFromCart = (itemId) => {
    const item = cart.find(item => item._id === itemId);
    setTotalPrice(totalPrice => totalPrice - item.price)
    setCart(cart => [...cart.filter(item => item._id !== itemId)])
  }

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Items addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} totalPrice={totalPrice} emptyCart={emptyCart} deleteItemFromCart={deleteItemFromCart} />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
