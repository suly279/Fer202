import React, { createContext, useState, useContext } from 'react';

// Tạo context giỏ hàng
const CartContext = createContext();

// Component cung cấp giỏ hàng cho toàn bộ ứng dụng
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Giỏ hàng ban đầu rỗng

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    // Thanh toán giỏ hàng
    const checkout = () => {
        alert('Payment Successfully!');
        setCart([]); // Sau khi thanh toán, làm sạch giỏ hàng
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook để sử dụng giỏ hàng
export const useCart = () => useContext(CartContext);
