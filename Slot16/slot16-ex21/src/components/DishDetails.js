import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const DishDetails = () => {
    const { id } = useParams();
    const [dish, setDish] = useState(null);

    useEffect(() => {
        fetch('/data/dishes.json')
            .then(response => response.json())
            .then(data => setDish(data.find(d => d.id === parseInt(id))))
            .catch(error => console.error("Error loading dish:", error));
    }, [id]);

    return dish ? (
        <div className="dish-detail-container">
            <h2>{dish.name}</h2>
            <img className="dish-detail-img" src={dish.image} alt={dish.name} />
            <p>Price: {dish.price}</p>
            <p>Category: {dish.category}</p>
            <p>{dish.detail}</p>
            <Link to="/dishes"><button>Back</button></Link>
        </div>
    ) : <p>Dish not found</p>;
};

export default DishDetails;
