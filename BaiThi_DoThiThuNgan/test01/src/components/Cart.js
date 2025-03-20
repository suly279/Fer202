import React, { useState } from 'react';
import { useCart } from './CartContext'; 

const Cart = () => {
    const { cart, removeFromCart, checkout } = useCart();
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleCheckboxChange = (productId) => {
        setSelectedProducts((prevSelected) =>
            prevSelected.includes(productId)
                ? prevSelected.filter((id) => id !== productId)
                : [...prevSelected, productId]
        );
    };

    const calculateTotal = () => {
        return selectedProducts.reduce((total, productId) => {
            const product = cart.find((item) => item.id === productId);
            return total + parseFloat(product.price.replace('$', ''));
        }, 0);
    };

    return (
        <div className="cart-container">
            <h3>Shopping Cart</h3>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        <input
                            type="checkbox"
                            checked={selectedProducts.includes(product.id)}
                            onChange={() => handleCheckboxChange(product.id)}
                        />
                        {product.name} - {product.price}
                        <button onClick={() => removeFromCart(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotal()}</p>
            <button onClick={checkout}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
