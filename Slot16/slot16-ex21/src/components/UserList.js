import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/data/users.json')
            .then(response => {
                if (!response.ok) throw new Error("Failed to load users");
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error("Error loading users:", error));
    }, []);
    

    return (
        <div>
            <h2>Users</h2>
            <table>
                <thead>
                    <tr><th>#</th><th>Full Name</th><th>Age</th><th>Details</th></tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.age}</td>
                            <td><Link to={`/users/${user.id}`}>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
