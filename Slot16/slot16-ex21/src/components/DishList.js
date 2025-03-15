import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DishList = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('/data/dishes.json')
            .then(response => {
                if (!response.ok) throw new Error("Failed to load dishes");
                return response.json();
            })
            .then(data => setDishes(data))
            .catch(error => console.error("Error loading dishes:", error));
    }, []);
    

    return (
        <div>
            <h2>Dishes List</h2>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {dishes.map(dish => (
                    <div key={dish.id} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
                        <img className="dish-img" src={dish.image} alt={dish.name} />
                        <h3>{dish.name}</h3>
                        <p>Price: {dish.price}</p>
                        <p>{dish.description}</p>
                        <Link to={`/dishes/${dish.id}`}><button>View Details</button></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DishList;
