// branches.js
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar component is in the same directory

export default function Branches() {
    const [selectedBranch, setSelectedBranch] = useState(null);

    return (
        <div style={{ display: 'flex', minHeight: '100vh', paddingLeft: '200px' }}>
            <Sidebar setSelectedBranch={setSelectedBranch} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: selectedBranch === 'Hyderabad' ? 'blue' : selectedBranch === 'Bhimavaram' ? 'green' : '' }}>
                {selectedBranch && (
                    <div className="welcomeMessage" style={{ padding: '20px', textAlign: 'center', width: '100%' }}>
                        <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: '24px' }}>
                            Welcome to {selectedBranch} branch
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div style={{ margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
                                <img src={`/${selectedBranch.toLowerCase()}_image1.jpeg`} alt={selectedBranch} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                <p>These the study building in the college which makes plesent environment and interaction with the nature</p>
                            </div>
                            <div style={{ margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
                                <img src={`/${selectedBranch.toLowerCase()}_image2.jpeg`} alt={selectedBranch} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                <p>These are the hostel buildings for the students</p>
                            </div>
                            <div style={{ margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
                                <img src={`/${selectedBranch.toLowerCase()}_image3.jpeg`} alt={selectedBranch} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                <p>The garden area in the college with pleasent nature and to conduct feast to the students for ther enjoyment</p>
                            </div>
                            <div style={{ margin: '10px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
                                <img src={`/${selectedBranch.toLowerCase()}_image4.jpeg`} alt={selectedBranch} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                                <p>Exam cell buildings</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
