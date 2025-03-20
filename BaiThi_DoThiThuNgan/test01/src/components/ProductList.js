import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';
const ProductList = () => {
    const { addToCart } = useCart(); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/Products')
            .then(response => setProducts(response.data))
            .catch(error => setError("Failed to load products: " + error.message));
    }, []);

    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Product List</h2>
            <div className="grid-container">
                {products.map(product => (
                    <div key={product.id} className="card">
                        <img className="product-img" src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                        <Link to={`/products/${product.id}`}>
                            <button>View Detail</button>
                        </Link>
                        <button onClick={() => addToCart(product)}>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
