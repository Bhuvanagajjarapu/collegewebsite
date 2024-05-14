
import Navbar from '../../components/Navbar'; 
import { useEffect, useState } from 'react';

const Teaching = () => {
  
  const facultyTeachingData = [
    {
      id: 1,
      name: "DVN Nagaraju",
      department: "Information Technology",
      role: "HOD",
      dateOfJoin: "January 11, 2010",
      imageUrl: "/hod sir.jpeg" 
    },
    {
      id: 2,
      name: "Satya Narayana",
      department: "CSE",
      role: "HOD",
      dateOfJoin: "JULY 1, 2010",
      imageUrl: "/cseh.jpeg"
    },
    {
      id: 3,
      name: "Ranga Rao",
      department: "AI_ML",
      role: "HOD",
      dateOfJoin: "March 10, 2011",
      imageUrl: "/ai-ml.jpeg" 
    },
    {
      id: 4,
      name: "Bagavan",
      department: "AI_DS",
      role: "HOD",
      dateOfJoin: "April 2 2013",
      imageUrl: "/at-ds.jpeg" 
    },
    {
      id: 5,
      name: "Rao",
      department: "Cyber",
      role: "HOD",
      dateOfJoin: "May 11, 2012",
      imageUrl: "/cyber.jpeg" 
    },
    {
      id: 6,
      name: "Bhanu Ranga Rao",
      department: "Information Technology",
      role: "Professor",
      dateOfJoin: "January 1, 2022",
      imageUrl: "/banu.jpeg" 
    },
    {
      id: 7,
      name: "Ram babu",
      department: "Cse",
      role: "Professor",
      dateOfJoin: "March 5, 2014",
      imageUrl: "/ram.jpeg" 
    },
    {
      id: 8,
      name: "sabitha",
      department: "Information Technology",
      role: " Assitant Professor",
      dateOfJoin: "November 1, 2021",
      imageUrl: "/sabitha.jpeg" 
    },
    
  ];
  
  
  const [selectedFilter, setSelectedFilter] = useState("All");

  
  const filteredFaculty = selectedFilter === "All" ? facultyTeachingData : facultyTeachingData.filter(faculty => faculty.department === selectedFilter);

  return (
    <div>
      <Navbar />
      <div className="filter-box">
        <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="CSE">CSE</option>
          <option value="Information Technology">Information Technology</option>
          <option value="AI_ML">AI_ML</option>
          <option value="AI_DS">AI_DS</option>
          <option value="Cyber">Cyber</option>
        </select>
      </div>
      <div className="faculty-teaching">
        {filteredFaculty.map((faculty) => (
          <div key={faculty.id} className="faculty-card">
            <div className="circle">
              <img src={faculty.imageUrl} alt={faculty.name} />
            </div>
            <div className="info">
              <h2>{faculty.name}</h2>
              <p><strong>Department:</strong> {faculty.department}</p>
              <p><strong>Role:</strong> {faculty.role}</p>
              <p><strong>Date of Join:</strong> {faculty.dateOfJoin}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .filter-box {
          text-align: center;
          padding: 20px 0;
        }

        .filter-box select {
          padding: 10px;
          font-size: 16px;
        }

        .faculty-teaching {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          padding-top: 60px; 
        }

        .faculty-card {
          width: 300px;
          height: 200px;
          background-color: #f0f0f0; 
          color: black; 
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          border-radius: 10px;
        }

        .circle {
          width: 100px;
          height: 100px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: -30px;
        }

        .circle img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        .info {
          padding: 20px;
        }

        h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          font-size: 16px;
          margin-bottom: 5px;
        }

        strong {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}

export default Teaching;
