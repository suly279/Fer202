import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ThemeComponent from "./component/ThemeComponent";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import DishesList from "./component/DishesList";
import Cart from "./component/Cart";

function App() {
  return (
    <div className="app-container">
      <ThemeProvider>
        <div className="section">
          <h2>🌓 Ứng dụng đổi Theme</h2>
          <ThemeComponent />
        </div>
      </ThemeProvider>

      <CartProvider>
        <div className="section">
          <h2>🛒 Ứng dụng Giỏ Hàng</h2>
          <DishesList />
          <Cart />
        </div>
      </CartProvider>
    </div>
  );
}

export default App;
