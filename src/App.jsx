import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage.jsx";
import React from "react";
import FoodList from "./components/FoodList.jsx";
import "./components/cart.css";
import PaymentSuccessPage from "./components/PaymentSuccessPage.jsx";

function App() {
  const foodItems = [
    {
      name: "Burger",
      price: 10,
      description: "It is a very tasty Burger !",
      image: "burger.jpg",
    },
    {
      name: "Pizza",
      price: 10,
      description: "It is a very tasty Pizza !",
      image: "pizza.jpg",
    },
  ];
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <div>
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <FoodList foodItems={foodItems} cart={cart} setCart={setCart} />
            }
          />
          <Route
            path="/cart"
            element={
              cart.length === 0 ? (
                <h1>Add Items to Cart</h1>
              ) : (
                <CartPage cart={cart} />
              )
            }
          />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
