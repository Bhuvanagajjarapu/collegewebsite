// Sidebar.js
import React from 'react';
import styles from './branches.module.css';

export default function Sidebar({ setSelectedBranch }) {
    return (
        <nav className={styles.sidebar}>
            <ul>
                <li onClick={() => setSelectedBranch('Hyderabad')} style={{ cursor: 'pointer' }}>
                    Hyderabad
                </li>
                <li onClick={() => setSelectedBranch('Bhimavaram')} style={{ cursor: 'pointer' }}>
                    Bhimavaram
                </li>
            </ul>
        </nav>
    );
}
