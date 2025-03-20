import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/Products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => setError("Failed to load product details: " + error.message));
    }, [id]);

    if (error) return <div>{error}</div>;

    return product ? (
        <div className="product-detail-container">
            <Link to="/products">
                <button className="home-button">Home</button>
            </Link>
            
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p>
            <p>{product.description}</p>
        </div>
    ) : <p>Product not found</p>;
};

export default ProductDetail;
