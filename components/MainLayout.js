// MainLayout.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function MainLayout() {
    const [selectedBranch, setSelectedBranch] = useState(null);

    let contentBackgroundColor = '';
    if (selectedBranch === 'Hyderabad') {
        contentBackgroundColor = 'blue';
    } else if (selectedBranch === 'Bhimavaram') {
        contentBackgroundColor = 'green';
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <Sidebar setSelectedBranch={setSelectedBranch} />
            <div style={{ backgroundColor: contentBackgroundColor, minHeight: '100vh', marginLeft: '250px', padding: '20px' }}>
                {/* Other content */}
            </div>
        </div>
    );
}
