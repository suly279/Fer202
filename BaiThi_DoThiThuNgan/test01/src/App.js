import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

import { CartProvider } from './components/CartContext'; 

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div>Đang tải...</div>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} /> 
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
};

export default App;
