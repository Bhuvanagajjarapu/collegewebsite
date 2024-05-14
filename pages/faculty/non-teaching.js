import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const NonTeaching = () => {
  
  const facultyTeachingData = [
    {
      id: 1,
      name: "DV NagaLaxmi",
      role: "Computer operator",
      dateOfJoin: "January 11, 2010",
      imageUrl: "/mam.jpeg" 
    },
    {
      id: 2,
      name: "Narayana Murthy",
      role: "Exam cell",
      dateOfJoin: "JULY 1, 2010",
      imageUrl: "/ai-ml.jpeg" 
    },
    {
      id: 3,
      name: "Ranga nadhu",
      role: "Placement cell",
      dateOfJoin: "March 10, 2011",
      imageUrl: "/cyber.jpeg" 
    },
    {
      id: 4,
      name: "Bagavan sri ram nadh",
      role: "office boy",
      dateOfJoin: "April 2 2013",
      imageUrl: "/officeboy.jpg" 
    },
    {
      id: 5,
      name: "Rani mekkar",
      role: "office girl",
      dateOfJoin: "May 11, 2012",
      imageUrl: "/officegirl.jpeg" 
    },
    {
      id: 6,
      name: "Bhanu Ranga mehadh",
      role: "Lab Asst",
      dateOfJoin: "January 1, 2022",
      imageUrl: "/banu.jpeg" 
    },
    {
      id: 7,
      name: "Ram nadh kovindh",
      department: "Cse",
      role: "Lab Asst",
      dateOfJoin: "March 5, 2014",
      imageUrl: "/ram.jpeg" 
    },
    {
      id: 8,
      name: "sai vinith",
      role: " Exam cell",
      dateOfJoin: "November 1, 2021",
      imageUrl: "/sunil sir.jpeg" 
    },
    
  ];

  
  const [selectedFilter, setSelectedFilter] = useState("All");

  
  const filteredFaculty = selectedFilter === "All" ? facultyTeachingData : facultyTeachingData.filter(faculty => faculty.role === selectedFilter);

  return (
    <div>
      <Navbar />
      <div className="filter-box">
        <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Computer operator">Computer operator</option>
          <option value="Exam cell">Exam cell</option>
          <option value="Placement cell">Placement cell</option>
          <option value="office boy">Office boy</option>
          <option value="office girl">Office girl</option>
          <option value="Lab Asst">Lab Asst</option>
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

export default NonTeaching;
