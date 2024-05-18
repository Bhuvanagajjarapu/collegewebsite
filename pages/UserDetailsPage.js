import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserDetailsPage.module.css';

export default function UserDetailsPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className={styles.container}>
            <h1><center>User Details</center></h1>
            <div className={styles.cardsContainer}>
                {users.map(user => (
                    <div key={user.id} className={styles.card}>
                        <h2>{user.name}</h2>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
