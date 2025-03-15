import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Food App</h1>
            <p>Select <Link to="/users">Users</Link> or <Link to="/dishes">Dishes</Link> to view details.</p>
        </div>
    );
};

export default Home;
