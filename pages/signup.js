import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from './Signup.module.css';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [course, setCourse] = useState('');
    const [registerNumber, setRegisterNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !phone || !address || !dob || !course || !registerNumber || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Send the data to the API endpoint
            await axios.post('http://localhost:3000/api/signup', {
                name, email, phone, address, dob, course, registerNumber, password, additionalInfo
            });
            setError('');
            router.push('/Login');
        } catch (error) {
            console.error('Signup failed:', error);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.card}>
                    <h1>Sign Up</h1>
                    <p>Already have an account? <button onClick={() => router.push('/Login')} className={styles.navButton}>Login</button></p>
                    {error && <p className={styles.error}>{error}</p>}
                    <form onSubmit={handleSignup}>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} />
                        <input type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
                        <input type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className={styles.input} />
                        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className={styles.input} />
                        <input type="date" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} className={styles.input} />
                        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} className={styles.input} />
                        <input type="text" placeholder="Register Number" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} className={styles.input} />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
                        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={styles.input} />
                        <textarea placeholder="Additional Information" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className={styles.textarea} />
                        <button type="submit" className={styles.signupButton}>Sign Up</button>
                    </form>
                </div>
            </div>
            <div className={styles.right}>
                <img src="/sign.jpg" alt="Sign Up" className={styles.googleImage} />
            </div>
        </div>
    );
}
