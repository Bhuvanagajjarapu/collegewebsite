import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import styles from './Login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const history = useHistory(); // Initialize useHistory hook

    const handleLogin = () => {
        // Perform validation logic here
        // For demonstration purposes, check if the email is not empty and password is at least 6 characters long
        if (email.trim() === '' || password.length < 6) {
            alert('Please enter valid email and password');
            return;
        }
        console.log('User details:', { email, password, isChecked });
        // If validation passes, navigate to the home page
        
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <h1>Login</h1>
                    <p>Don't have an account yet? <a href="/signup">Sign up</a></p>
                    <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
                    <label>
                        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} /> Remind me
                    </label>
                    <button onClick={handleLogin} className={styles.loginButton}>Login</button>
                </div>
            </div>
            <div className={styles.right}>
                <img src="/login.jpeg" alt="Google" className={styles.googleImage} />
            </div>
        </div>
    );
}
