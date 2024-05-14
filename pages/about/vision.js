import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar'; // Adjust the import path based on the actual location of your Navbar component

const Vision = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImageUrls = ['/image12.jpeg', '/image5.webp', '/image8.jpeg']; // Add your image URLs here

  // Function to change background image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % backgroundImageUrls.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="college-vision">
        <div className="slideshow-background" style={{ backgroundImage: `url(${backgroundImageUrls[backgroundImageIndex]})` }}></div>
        <div className="content">
          <div className="scrollable-container">
            <h1 className="vision-heading"><center>Vision</center></h1>
            <p className="vision-text">Transform the society through excellence in Education, Community empowerment, and sustained Environmental protection.</p>
          </div>
          <div className="scrollable-container">
            <p className="mission-heading"><strong><center>Mission</center></strong></p>
            <ul className="mission-list">
              
              <li>To achieve Academic excellence through innovative learning practices</li>
              <li>To instill self-confidence among rural students by supplementing with co-curricular and extra-curricular activities</li>
              <li>To inculcate discipline and values among students</li>
              <li>To establish centers for Institute-Industry partnership</li>
              <li>To extend financial assistance for the economically weaker sections</li>
              <li>To create self-employment opportunities and skill up-gradation</li>
              <li>To support environment-friendly Green Practices</li>
              <li>Creating innovation hubs</li>
              
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .college-vision {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .slideshow-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.5;
          z-index: -1;
          animation: fadeInOut 4s ease-in-out infinite;
        }

        @keyframes fadeInOut {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .content {
          padding: 50px;
          color: #333;
          font-size: 28px; 
          animation: fadeIn 2s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .vision-heading, .mission-heading {
          animation: slideUp 2s ease-in-out;
          font-weight: bold; 
        }

        .vision-text {
          margin-bottom: 20px; 
          font-weight: bold; 
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0%);
          }
        }

        p {
          margin-bottom: 20px; 
        }

        ul {
          margin-left: 20px; 
          padding-left: 20px; 
        }

        li {
          margin-bottom: 10px; 
        }

        .scrollable-container {
          max-height: 70vh; 
          overflow-y: auto; 
        }

        .mission-list {
          animation: scrollList 15s linear infinite;
          margin-left: 300px; /* Remove default margin */
          padding-left: 20px; 
        }

        @keyframes scrollList {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default Vision;
