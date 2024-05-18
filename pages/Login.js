// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Perform validation logic here
    if (email.trim() === '' || password.trim() === '') {
      setError('Please enter both email and password');
      return;
    }

    try {
      // Send login credentials to your API endpoint for validation
      const response = await axios.post('/api/login', { email, password });

      // If login is successful, redirect to UserDetailsPage
      if (response.status === 200) {
        router.push('/UserDetailsPage');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.card}>
          <h1>Login</h1>
          <p>Don't have an account yet? <Link href="/signup">Sign up</Link></p>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              /> Remind me
            </label>
            <button type="submit" className={styles.loginButton}>Login</button>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <img src="/login.jpeg" alt="Login" className={styles.googleImage} />
      </div>
    </div>
  );
}
