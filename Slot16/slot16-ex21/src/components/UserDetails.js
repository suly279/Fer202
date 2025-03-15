import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('/data/users.json')
            .then(response => response.json())
            .then(data => setUser(data.find(u => u.id === parseInt(id))));
    }, [id]);

    return user ? (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <Link to="/users"><button>Back</button></Link>
        </div>
    ) : <p>User not found</p>;
};

export default UserDetails;
