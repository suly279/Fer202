import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CartProvider } from "./contexts/CartContext";
import ThemeToggle from "./components/ThemeToggle";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="app-container">
          <ThemeToggle />
          <DishesList />
          <Cart />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
